import { NewsItem } from '@/types';
import { FC } from 'react';

interface NewsProps {
    data: NewsItem[];
}

const News: FC<NewsProps> = ({ data }) => {
    return (
        <>
            {data?.map((news: NewsItem, index) => {
                return (
                    <div
                        className="py-2  border-b border-t-0 border-l-0 border-r-0 border-solid my-2 border-gray-300 flex  flex-1 h-full justify-center items-center "
                        key={index}
                    >
                        <img src={news.imageUrl} alt="" className="w-20 h-20" />
                        <div className="mx-3  ">
                            <p className="text-xs m-0">{news.source}</p>
                            <p className="text-xs my-1 text-primary">
                                {news.date}
                            </p>
                            <p className="text-sm m-0">{news.headline}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default News;
