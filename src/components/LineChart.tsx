import { chartConfig } from '@/constants/config';
import { ResponsiveLine } from '@nivo/line';
import { useCallback } from 'react';
import ChartFilter from './ChartFilter';
import useChart from '@/hooks/useChart';

const LineChart = (props: { selectedDate: any; data: any }) => {
    const { selectedDate, data } = props;

    const {
        interval,
        selectedFilter,
        highestValue,
        setSelectedFilter,
        chartData,
    } = useChart({
        data: data,
        selectedDate: selectedDate,
    });

    const axisBottom = useCallback(() => {
        return {
            format: '%b %d',
            legendOffset: 5,
            tickRotation: 20,
            tickValues: interval,
        };
    }, [selectedFilter, interval]);

    return (
        <div className="flex flex-1 w-full h-full relative overflow-x-scroll">
            <ul className="flex absolute top-0 right-5 z-40 list-none">
                {Object.keys(chartConfig).map((item) => (
                    <li key={item}>
                        <ChartFilter
                            text={item}
                            active={selectedFilter === item}
                            onClick={() => {
                                setSelectedFilter(item);
                            }}
                        />
                    </li>
                ))}
            </ul>
            <ResponsiveLine
                animate
                colors={['#344afb']}
                curve="natural"
                data={chartData}
                xFormat="time:%Y-%m-%d"
                xScale={{
                    format: '%Y-%m-%d',
                    precision: 'day',
                    type: 'time',
                    useUTC: false,
                }}
                margin={{ top: 50, right: 20, bottom: 35, left: 50 }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={axisBottom()}
                gridXValues={20}
                gridYValues={20}
                axisLeft={{
                    tickSize: 1,
                    tickPadding: 20,
                    tickRotation: -10,
                    legend: 'price',
                    legendOffset: 0,
                    legendPosition: 'middle',
                }}
                markers={[
                    {
                        axis: 'y',
                        value: highestValue.y,
                        lineStyle: { stroke: '#09c122', strokeWidth: 1 },
                        legend: 'Highest',
                    },
                ]}
                pointSize={3}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
                pointBorderColor={{ from: '#000' }}
                enablePointLabel={true}
                pointLabelYOffset={-19}
                areaOpacity={0.25}
                legends={[]}
                useMesh
                enableArea
                defs={[
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            { offset: 0, color: '#344afb' },
                            { offset: 10, color: '#fdfbfb' },
                        ],
                    },
                ]}
                fill={[
                    {
                        match: '*',
                        id: 'gradient',
                    },
                ]}
                layers={[
                    'grid',
                    'markers',
                    'axes',
                    'areas',
                    'crosshair',
                    'lines',
                    'points',
                    'slices',
                    'mesh',
                ]}
            />
        </div>
    );
};
export default LineChart;
