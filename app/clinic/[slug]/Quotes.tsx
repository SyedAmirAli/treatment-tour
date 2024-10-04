'use client';
import Loading from '@/app/components/commons/Loading';
import info from '@/assets/info';
import { useGetQuotesQuery } from '@/redux/api/apiSlice';
import { useState } from 'react';

interface ReviewData {
    id: number;
    clinic_id: number;
    name: string;
    procedure: string;
    price: string;
    duration: string;
    created_at: string;
    updated_at: string;
}

export default function Quotes({ clinicId }: { clinicId: string }) {
    const { isLoading, isError, error, data } = useGetQuotesQuery(clinicId);

    info(
        'Review.tsx',
        'useGetQuotesQuery',
        {
            isLoading,
            isError,
            error,
            data,
        },
        'ignore'
    );

    const [isQuote, setIsQuote] = useState(false);

    if (isLoading) return <Loading />;
    if (isError) return <p>Error loading reviews</p>;

    return (
        <div className='border-b-2 py-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>
                    Prices and Procedures
                </h1>
                <button
                    onClick={() => setIsQuote(!isQuote)}
                    className='shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-solid border-slate-300 uppercase tracking-wide text-primary hover:bg-primary hover:text-white duration-500 hover:tracking-wider p-2 bg-white font-medium rounded-lg text-lg text-center sm:mr-6 mt-4'>
                    Get Quote
                </button>
            </div>

            {/* Review Table with Header */}
            {isQuote && (
                <div className='flex w-full'>
                    <table className='table-fixed w-full mt-10 mb-10'>
                        <thead className='border border-solid border-slate-300 w-full'>
                            <tr className='border border-solid border-slate-300'>
                                <th className='border border-solid border-slate-300 p-4 font-bold text-left'>
                                    Name
                                </th>
                                <th className='border border-solid border-slate-300 p-4 font-bold text-left'>
                                    Procedure
                                </th>
                                <th className='border border-solid border-slate-300 p-4 font-bold text-left'>
                                    Price
                                </th>
                                <th className='border border-solid border-slate-300 p-4 font-bold text-left'>
                                    Duration
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((review: ReviewData) => (
                                <tr key={review.id}>
                                    <td className='p-4 font-medium border border-solid border-slate-300'>
                                        {review.name}
                                    </td>
                                    <td className='p-4 font-medium border border-solid border-slate-300'>
                                        {review.procedure}
                                    </td>
                                    <td className='p-4 font-medium border border-solid border-slate-300'>
                                        ${review.price}
                                    </td>
                                    <td className='p-4 font-medium border border-solid border-slate-300'>
                                        {review.duration}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
