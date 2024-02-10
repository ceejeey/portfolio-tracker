import { CompanyInfo } from '@/types';
import { FC } from 'react';

interface StockDetailsCardProps {
    data: CompanyInfo[];
}

const StockDetailsCard: FC<StockDetailsCardProps> = ({ data }) => {
    const renderStockDetails = (name: string, value: string | number) => {
        return (
            <div className="flex justify-between gap-5 items-center">
                <p className="">{name} </p>
                <p className="text-sm text-gray-500">{String(value)}</p>
            </div>
        );
    };
    return (
        <>
            <div className="flex justify-between gap-5 items-center">
                <h1 className="">${data[0].price}</h1>
                <p className="text-sm text-red-500">-{data[0].change}</p>
            </div>

            {data?.map((company: CompanyInfo, index) => (
                <div key={index}>
                    {Object.entries(company).map(([key, value]) =>
                        renderStockDetails(key, value)
                    )}
                </div>
            ))}
        </>
    );
};

export default StockDetailsCard;
