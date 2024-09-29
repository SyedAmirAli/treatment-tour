import React from 'react';
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';

const BrandCarousel = () => {
    const brands = [
        { id: 1, title: '', image: '/images/brand-1.png' },
        { id: 2, title: '', image: '/images/brand-2.png' },
        { id: 3, title: '', image: '/images/brand-3.png' },
        { id: 4, title: '', image: '/images/brand-4.png' },
        { id: 5, title: '', image: '/images/brand-5.png' },
    ];

    // Responsive options for the carousel
    const responsiveOptions = [
        {
            breakpoint: '1600px',
            numVisible: 5,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 5,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 2,
            numScroll: 1,
        },
    ];

    // Template for each product in the carousel
    const brandTemplate = (brand: { title: string; image: string }) => {
        return (
            <div className='border-surface-200 dark:border-surface-700 rounded m-2 p-4'>
                <figure className='relative mx-auto mb-4 h-16 px-4'>
                    <Image
                        fill
                        src={brand?.image}
                        alt={brand?.title}
                        className='w-full rounded h-full'
                    />
                </figure>
            </div>
        );
    };

    return (
        <div className='pb-10'>
            <Carousel
                value={brands}
                numVisible={5}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={3000}
                showIndicators
                itemTemplate={brandTemplate} // Use template for items
            />
        </div>
    );
};

export default BrandCarousel;
