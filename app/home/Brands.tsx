import React from 'react';
import BrandCarousel from './BrandCarousel';

export default function Brands() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='container'>
                <div className='mb-8'>
                    <h2 className='font-bold text-xl text-primary'>
                        <span className='tracking-[-4px] pr-4'>----</span>
                        <span className='capitalize'>Brands</span>
                    </h2>
                    <h1 className='text-2xl font-medium mt-2'>
                        Our Latest Case Studies
                    </h1>
                </div>

                <BrandCarousel />
            </div>
        </div>
    );
}
