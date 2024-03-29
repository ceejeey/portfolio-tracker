import { spCompanyDetails } from '@/constants/mock';
import { CompanyDetails } from '@/types';

import { useEffect, useMemo, useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router-dom';

const useHome = () => {
    const [data, setData] = useState<any | null>(null);

    const { stock } = useParams<Params>();

    useEffect(() => {
        if (data === null) {
            const data = spCompanyDetails[0];
            setData(data['META']);
        }
    }, [data]);

    const companyData = useMemo<CompanyDetails[]>(() => {
        if (spCompanyDetails?.length === 0) return [];
        const data = spCompanyDetails[0];

        return Object.keys(data).map((key) => ({
            ...data[key].companyInfo,
            ...data[key],
            symbol: key,
        }));
    }, []);

    useEffect(() => {
        if (stock !== undefined) {
            const stockData = spCompanyDetails.find((data) => data[stock]);
            setData(stockData ? stockData[stock] : null);
        }
    }, [stock]);

    const navigate = useNavigate();

    const onSelect = (value: string) => {
        navigate(`/${value}`);
    };

    return { companyData, data, onSelect };
};

export default useHome;
