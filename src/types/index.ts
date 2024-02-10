export type DataPoint = {
    x: Date | string;
    y: number;
};

export type Series = {
    id: string;
    data: DataPoint[];
};

export type CompanyInfo = {
    name: string;
    shareOutstanding: number;
    weburl: string;
    change: number;
    price: number;
    industry: string;
    country: string;
    exchange: string;
    ipo: string;
    marketCapitalization: number;
};

export type StockDetails = {
    lastPrice: number | string;
    openPrice: number | string;
    lowPrice: number | string;
    change: number | string;
    percentChange: number | string;
    volume: string;
    date: string;
    stockChangeDirection: 'increase' | 'decrease';
    dayRange: string;
    yearRange: string;
    marketCap: string;
    news: NewsItem[];
    industry: string;
    companyInfo: CompanyInfo[];
};

export type Timeframe = '1D' | '5D' | '1M' | '6M' | 'YTD' | '1Y' | '5Y';

export interface NavLinkTypes {
    id: number;
    url: string;
    text: string;
}

export type CompanyDetails = {
    name: string;

    news: NewsItem[];
    stockData: stockData[];
    companyInfo: CompanyInfo[];
};

export type NewsItem = {
    headline: string;
    date: string;
    source: string;
    imageUrl: string;
};

export type stockData = {
    Date: string;
    Price: number;
    Open: number;
    High: number;
    Low: number;
    Vol: string;
    Change: string;
};

export type SPCompanyDetails = {
    [ticker: string]: CompanyDetails;
};
