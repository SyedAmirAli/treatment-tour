import Link from 'next/link';
import React from 'react';

interface IntroProps {
    name: string;
    address: string;
    ratings: number;
    reviews?: number;
}

export default function Intro({
    name,
    address,
    ratings,
    reviews = 0,
}: IntroProps) {
    return (
        <div className='w-full'>
            <div className='flex flex-col sm:flex-row gap-3 justify-between'>
                <div className='left'>
                    <h1 className='font-bold text-4xl mb-2'>{name}</h1>
                    <div className='w-full sm:w-auto flex flex-col lg:flex-row lg:gap-2'>
                        <p className='flex gap-2'>
                            <span className='text-primary'>
                                <i className='fa-solid fa-star'></i>
                            </span>
                            <span className='font-bold pr-2 text-lg'>
                                {ratings ? ratings.toFixed(2) : '0.00'}
                            </span>
                            <span className='font-medium underline'>
                                {reviews} reviews
                            </span>
                        </p>
                        <span className='px-1'>{address}</span>
                    </div>
                </div>
                <div className='mr-4 sm:mt-10 flex items-center justify-center gap-6'>
                    <Link
                        href='#'
                        className='font-semibold duration-500 hover:text-primary'>
                        <i className='fa-solid fa-arrow-up-from-bracket mr-2'></i>
                        Share
                    </Link>
                    <Link
                        href='#'
                        className='font-semibold duration-500 hover:text-primary'>
                        <i className='fa-solid fa-heart mr-2'></i>Save
                    </Link>
                </div>
            </div>
        </div>
    );
}
