import BrandCarousel from '@/app/home/BrandCarousel';
import React from 'react';

export default function AfterBefore() {
    return (
        <div className='flex flex-col px-6'>
            <div className='flex w-full items-center cursor-pointer justify-between'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                    After & Before
                </h1>
                <i className='fa-solid fa-angle-down mr-4'></i>
            </div>
            <BrandCarousel
                height={200}
                brands={[
                    { id: 1, title: '', image: '/images/img-1.png' },
                    { id: 2, title: '', image: '/images/img-2.png' },
                    { id: 3, title: '', image: '/images/img-3.png' },
                    { id: 4, title: '', image: '/images/img-4.png' },
                    { id: 5, title: '', image: '/images/1.jpg' },
                ]}
            />
        </div>
    );
}
