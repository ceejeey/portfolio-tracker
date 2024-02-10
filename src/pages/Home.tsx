import LineChart from '@/components/LineChart';
import { Flex, Tabs } from 'antd';
import { AutoComplete, Input } from 'antd';
import type { SelectProps, TabsProps } from 'antd';
import { useState } from 'react';
import { spCompanyNames } from '@/constants/mock';
import DatePicKer from '@/components/DatePicker';

import useHome from '@/hooks/useHome';
import News from '@/components/News';
import { useNavigate } from 'react-router-dom';
import StockDetailsCard from '@/components/StockDetailsCard';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const { data } = useHome();

    const handleSearch = () => {
        const filteredOptions = spCompanyNames.map((companyName) => ({
            value: companyName.value,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>{companyName.name}</span>
                </div>
            ),
        }));

        setOptions(filteredOptions);
    };
    const navigate = useNavigate();

    const onSelect = (value: string) => {
        navigate(`/${value}`);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Stock',
            children: <StockDetailsCard data={data?.companyInfo} />,
        },
        {
            key: '2',
            label: 'News',
            children: <News data={data?.news} />,
        },
    ];

    if (data === null) {
        return 'Loading';
    }
    return (
        <div className="flex flex-1 flex-col h-full px-10 justify-between bg-[#fff]">
            <Flex vertical className="pb-5">
                <div className=" flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-end">
                    <AutoComplete
                        popupMatchSelectWidth={252}
                        style={{ width: 300 }}
                        options={options}
                        onSelect={onSelect}
                        onSearch={handleSearch}
                        size="large"
                    >
                        <Input.Search
                            size="large"
                            placeholder="Search Company"
                            enterButton
                        />
                    </AutoComplete>
                    <DatePicKer setSelectedDate={setSelectedDate} />
                </div>
                <h1 className="pl">Meta Platform Inc</h1>
            </Flex>
            <div className="flex gap-10 flex-col md:gap-5  md:flex-row md:max-h-[70vh] m-auto ">
                <Flex vertical>
                    <div className=" w-[90vw] h-[60vh] flex  m-auto md:w-[60vw] md:h-full md:max-h-fit rounded-xl border-solid border border-gray-200 bg-[#fff] transition-all  hover:scale-105 duration-300">
                        {
                            <LineChart
                                selectedDate={selectedDate}
                                data={data?.stockData}
                            />
                        }
                    </div>
                </Flex>
                <Flex vertical className=" flex-1 m-auto ">
                    <div className="flex p-10 pt-0 flex-col flex-1 min-w-full   md:h-full md:max-h-fit md:min-h-[70vh] md:w-[25vw]  border-solid border border-gray-200 rounded-xl bg-[#fff]  transition-all  hover:scale-105">
                        <Tabs defaultActiveKey="1" items={items} />
                    </div>
                </Flex>
            </div>
        </div>
    );
};

export default Home;
