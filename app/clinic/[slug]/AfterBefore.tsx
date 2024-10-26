import BrandCarousel from '@/app/home/BrandCarousel';
import info, { portfolioAsset } from '@/assets/info';
import { useGetPortfoliosQuery } from '@/redux/api/apiSlice';
import React from 'react';

export default function AfterBefore({ clinicId }: { clinicId: string }) {
    const { isLoading, isError, error, data } = useGetPortfoliosQuery(clinicId);

    // Logging for debugging
    info(
        'Review.tsx',
        'useGetPortfoliosQuery',
        {
            isLoading,
            isError,
            error,
            data,
        },
        'ignore'
    );

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;

    return (
        <div className='w-full'>
            <div className='flex border-b border-solid border-slate-300 mt-2 w-full items-center cursor-pointer justify-between pb-3'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold pb-4'>
                    After & Before
                </h1>
            </div>
            <BrandCarousel
                height={200}
                brands={
                    data?.map((portfolio: PortFolioType) => ({
                        image: portfolioAsset(portfolio.image),
                        title: portfolio.title,
                    })) || []
                }
            />
        </div>
    );
}
interface PortFolioType {
    id: number;
    clinic_id: number;
    title: string;
    image: string;
    created_at: string;
    updated_at: string;
}
