import Loading from '@/app/components/commons/Loading';
import StarRating from '@/app/components/commons/StarRating';
import info from '@/assets/info';
import { useGetReviewsQuery } from '@/redux/api/apiSlice';
import React from 'react';

export default function Review({ clinicId }: { clinicId: string }) {
    const { isLoading, isError, error, data, refetch } =
        useGetReviewsQuery(clinicId);

    // Logging for debugging
    info(
        'Review.tsx',
        'useGetReviewsQuery',
        {
            isLoading,
            isError,
            error,
            data,
        },
        'ignore'
    );

    // Loading and Error states
    if (isLoading) return <Loading />;
    if (isError) return <p>Something went wrong!</p>;

    // Data render
    return (
        data.length > 0 && (
            <div className='flex flex-col border-b-2 pb-10'>
                <div className='mt-6 w-full'>
                    <h2 className='mt-4 text-3xl font-semibold'>Reviews</h2>

                    <div className='flex flex-col md:flex-row w-full justify-between'>
                        <div className='flex mt-5 mb-6'>
                            <i className='fa-solid fa-star'>
                                <span className='ml-1 font-sans font-medium text-lg'>
                                    {data?.length > 0
                                        ? data.reduce(
                                              (
                                                  sum: number,
                                                  review: { rating: string }
                                              ) =>
                                                  sum +
                                                  parseFloat(review.rating),
                                              0
                                          ) / data.length
                                        : '0'}
                                </span>
                            </i>
                            <li className='ml-2'>
                                <span className='font-medium text-lg -ml-3'>
                                    {data?.length} reviews
                                </span>
                            </li>
                        </div>
                        {/* <div className='flex w-full max-w-lg'>
                        <Link
                            href='#'
                            className='border bg-white border-gray-400 hover:text-primary hover:tracking-wide duration-500 text-gray-700 text-center text-md font-bold mt-4 p-3 w-full rounded-md hover:bg-gray-50 uppercase'>
                            Write a review
                        </Link>
                    </div> */}
                    </div>

                    <div className='flex'>
                        <table className='table-fixed w-full mt-10 mb-10'>
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className='p-4 text-left'>
                                        Reviewer Name
                                    </th>
                                    <th className='p-4 text-left'>Review</th>
                                    <th className='p-4 text-left'>Rating</th>
                                    <th className='p-4 text-left'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((review: ReviewType) => (
                                    <tr key={review.id}>
                                        <td className='p-4 font-medium'>
                                            {review.name}
                                        </td>
                                        <td className='p-4 font-medium'>
                                            {review.review}
                                        </td>
                                        <td className='p-4 font-medium'>
                                            <p className='flex gap-2 items-center'>
                                                <b className='text-slate-500'>
                                                    ({review.rating})
                                                </b>
                                                <StarRating
                                                    averageRating={
                                                        review.rating
                                                    }
                                                />
                                            </p>
                                        </td>
                                        <td className='p-4 font-medium'>
                                            {new Date(
                                                review.date
                                            ).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex'>
                    <button
                        onClick={refetch}
                        className='border border-gray-700 text-gray-700 text-center text-md font-bold mt-4 py-3 px-5 duration-500 hover:border-primary rounded-md hover:bg-gray-50 bg-white hover:text-primary'>
                        Show More Reviews
                    </button>
                </div>
            </div>
        )
    );
}

interface ReviewType {
    id: number;
    clinic_id: number;
    name: string;
    date: string;
    review: string;
    rating: number;
    created_at: string;
    updated_at: string;
}
