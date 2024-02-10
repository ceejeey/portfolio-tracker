import { formatDate } from '@/lib/helpers/dateHelper';
import { stockData } from '@/types';
import { parse } from 'date-fns';
import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

interface DailyEntry {
    Date: string;
    Price: number;
}

interface WeeklyEntry {
    Date: string;
    Price: any;
}

interface IUseChart {
    data: stockData[];
    selectedDate: any;
}

const useChart = ({ data, selectedDate }: IUseChart) => {
    const [chartData, setChartData] = useState<any>([]);

    const [interval, setInterval] = useState('every 1 day');
    const [selectedFilter, setSelectedFilter] = useState('1d');
    const { stock } = useParams<Params>();

    useEffect(() => {
        if (data !== undefined) {
            const filteredData = filterData(data);

            setChartData(filteredData);
        }
    }, [data]);

    //Filter data based on Time series
    useEffect(() => {
        switch (selectedFilter) {
            case '1D':
                setChartData(filterData(data));
                setInterval('every 1 days');
                break;
            case '1W':
                setChartData(filterData(convertToWeeklyData(data)));
                setInterval('every 1 week');

                break;
            case '1M':
                setInterval('every 1 months');
                setChartData(filterData(convertToMonthlyData(data)));
                break;
            case '1Y':
                // const yearlyData = convertToYearlyData(data);

                setInterval('every 1 years');
                // setChartData(yearlyData);
                break;

            default:
                break;
        }
    }, [stock, selectedFilter]);

    //Filter data based on date
    useEffect(() => {
        const filterDataByDateRange = (
            data: any[],
            startDate: string,
            endDate: string
        ) => {
            const parsedStartDate = parse(startDate, 'MM/dd/yyyy', new Date());
            const parsedEndDate = parse(endDate, 'MM/dd/yyyy', new Date());

            return data.filter((item) => {
                const itemDate = parse(item.Date, 'MM/dd/yyyy', new Date());
                return itemDate >= parsedStartDate && itemDate <= parsedEndDate;
            });
        };

        if (selectedDate?.length === 2) {
            const start = selectedDate[0]?.format('MM/DD/YYYY') || '';
            const end = selectedDate[1]?.format('MM/DD/YYYY') || '';

            const filteredData = filterDataByDateRange(data, start, end);
            setChartData(filterData(filteredData));
        }
    }, [selectedDate]);

    const filterData = (data: { Date: string; Price: any }[]) => {
        const filteredData = [
            {
                id: 'Price',
                data: data?.map((entry: { Date: string; Price: any }) => ({
                    x: formatDate(entry?.Date),
                    y: entry.Price,
                })),
            },
        ];
        return filteredData;
    };

    const convertToWeeklyData = (dailyData: DailyEntry[]): WeeklyEntry[] => {
        const weeklyData: WeeklyEntry[] = [];
        let currentWeekStart: string | null = null;
        let weeklyEntry: WeeklyEntry | null = null;

        dailyData.forEach((dailyEntry) => {
            const date = new Date(dailyEntry.Date);
            const weekStart = getWeekStartDate(date);

            if (currentWeekStart !== weekStart) {
                if (weeklyEntry !== null) {
                    weeklyData.push(weeklyEntry);
                }

                currentWeekStart = weekStart;
                weeklyEntry = {
                    Date: weekStart,
                    Price: [dailyEntry.Price],
                };
            } else {
                weeklyEntry!.Price.push(dailyEntry.Price);
            }
        });

        if (weeklyEntry !== null) {
            weeklyData.push(weeklyEntry);
        }

        return weeklyData.map((entry) => ({
            Date: entry.Date,
            Price: calculateAverage(entry.Price),
        }));
    };

    // Helper function to get ISO week number
    const getWeekStartDate = (date: Date) => {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() - d.getDay() + 1);
        return formatWeek(d);
    };

    // Helper function to format date as YYYY-MM-DD
    const formatWeek = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
    };

    // Helper function to calculate average of an array of numbers
    const calculateAverage = (numbers: any[]) => {
        const sum = numbers.reduce((acc, val) => acc + val, 0);
        return sum / numbers.length;
    };

    const convertToMonthlyData = (dailyData: any[]): any[] => {
        const monthlyData: any[] = [];
        let currentMonthStart: string | null = null;
        let monthlyEntry: any | null = null;

        dailyData.forEach((dailyEntry) => {
            const date = new Date(dailyEntry.Date);
            const monthStart = getMonthStartDate(date);

            if (currentMonthStart !== monthStart) {
                if (monthlyEntry !== null) {
                    monthlyData.push(monthlyEntry);
                }

                currentMonthStart = monthStart;
                monthlyEntry = {
                    Date: monthStart,
                    Price: [dailyEntry.Price],
                };
            } else {
                monthlyEntry!.Price.push(dailyEntry.Price);
            }
        });

        if (monthlyEntry !== null) {
            monthlyData.push(monthlyEntry);
        }

        return monthlyData.map((entry) => ({
            Date: entry.Date,
            Price: calculateAverage(entry.Price),
        }));
    };

    // Helper function to get start of the month
    const getMonthStartDate = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Note: getMonth returns 0-based index
        return `${month}/01/${year}`;
    };

    const findHighestValue = (data: any[]) => {
        let highest = { x: null, y: 0 };
        if (data.length) {
            data?.forEach((serie) => {
                serie.data.forEach((d: any) => {
                    if (d.y > highest.y) {
                        highest = d;
                    }
                });
            });
        }

        return highest;
    };

    const highestValue = findHighestValue(chartData);

    return {
        chartData,
        stock,
        interval,
        selectedFilter,
        filterData,
        highestValue,
        setSelectedFilter,
    };
};

export default useChart;
