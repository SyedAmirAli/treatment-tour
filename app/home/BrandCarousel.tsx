/* import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../styles/globals.css'; // Your global styles

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import OwlCarousel for Next.js
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Disable server-side rendering for OwlCarousel
});

interface Brand {
    name: string;
    image: string; // Image path or URL
}

interface CarouselProps {
    brands: Brand[];
}

const BrandCarousel: React.FC<CarouselProps> = ({ brands }) => {
    const options = {
        loop: true,
        margin: 10,
        nav: true, // Show next/prev buttons
        dots: true, // Show dot navigation
        autoplay: true,
        autoplayTimeout: 3000, // Auto scroll every 3 seconds
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1, // 1 slide on small screens
            },
            600: {
                items: 2, // 2 slides on medium screens
            },
            1000: {
                items: 3, // 3 slides on large screens
            },
        },
    };

    return (
        <div className='carousel-container'>
            <OwlCarousel className='owl-theme' {...options}>
                {brands.map((brand, index) => (
                    <div key={index} className='item'>
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            width={300}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                        <h3>{brand.name}</h3>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default BrandCarousel; */

// "react-owl-carousel": "^2.3.3",
// "react-redux": "^9.1.2",
// "react-slick": "^0.30.2",
// "slick-carousel": "^1.8.1",

import React from 'react';
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';

const BrandCarousel = ({
    brands = [
        { id: 1, title: '', image: '/images/brand-1.png' },
        { id: 2, title: '', image: '/images/brand-2.png' },
        { id: 3, title: '', image: '/images/brand-3.png' },
        { id: 4, title: '', image: '/images/brand-4.png' },
        { id: 5, title: '', image: '/images/brand-5.png' },
    ],
    height = '64px',
}: {
    brands?: object[];
    height?: number | string;
}) => {
    // Responsive options for the carousel
    const responsiveOptions = [
        {
            breakpoint: '1600px',
            numVisible: 5,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    // Template for each product in the carousel
    const brandTemplate = (brand: { title: string; image: string }) => {
        return (
            <div className='border-surface-200 dark:border-surface-700 rounded m-2'>
                <figure className='relative mx-auto mb-4' style={{ height }}>
                    <Image
                        // fill
                        width={300}
                        height={300}
                        unoptimized
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

/* import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Brand {
    name: string;
    image: string;
}

interface SliderProps {
    brands: Brand[];
    reverse?: boolean;
}

const BrandSlider: React.FC<SliderProps> = ({ brands, reverse = false }) => {
    const sliderContainer = useRef<HTMLDivElement | null>(null);
    const sliderSlide = useRef<HTMLDivElement | null>(null);

    // Calculate animation duration based on the number of brands
    const animationDuration = `${3 * brands.length}s`; // Base duration is 3 seconds per brand

    useEffect(() => {
        if (sliderSlide.current && sliderContainer.current) {
            const clonedSlide = sliderSlide.current.cloneNode(
                true
            ) as HTMLDivElement;
            sliderContainer.current.appendChild(clonedSlide);
        }
    }, [brands.length]);

    return (
        <div
            ref={sliderContainer}
            className='slider-container w-full flex mt-5 gap-4'>
            <div
                ref={sliderSlide}
                className='w-full flex slider-container-slide gap-4'
                style={
                    {
                        width: `${170 * brands.length}px`,
                        animationDuration,
                        '--start': reverse ? '-100%' : '0%',
                        '--end': reverse ? '0%' : '-100%',
                    } as React.CSSProperties
                }>
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className='flex flex-col items-center justify-between h-full'
                        style={{ minWidth: '300px' }}>
                        <div className='mb-2'>
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                // style={{ width: '170px', height: '50px' }}
                                width={300}
                                height={300}
                                className='rounded-xl'
                            />
                        </div>
                        {/* <h3 className='text-center fs-5 fw-normal'>
                            {brand.name}
                        </h3> * /}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandSlider; */
/* import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Brand {
    name: string;
    image: string;
}

interface CarouselProps {
    brands: Brand[];
}

const BrandCarousel: React.FC<CarouselProps> = ({ brands }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const totalSlides = brands.length;

    const sliderRef = useRef<HTMLDivElement | null>(null);

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHovered]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div
            className='carousel-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {/* Slider * /}
            <div className='carousel-slider' ref={sliderRef}>
                <div
                    className='carousel-track'
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s ease-in-out',
                        width: `${totalSlides * 100}%`,
                    }}>
                    {brands.map((brand, index) => (
                        <div key={index} className='carousel-slide'>
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                // style={{ width: '170px', height: '50px' }}
                                width={300}
                                height={220}
                            />
                            <h3>{brand.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation * /}
            <button className='carousel-prev' onClick={prevSlide}>
                &lt;
            </button>
            <button className='carousel-next' onClick={nextSlide}>
                &gt;
            </button>

            {/* Dots * /}
            <div className='carousel-dots'>
                {brands.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-dot ${
                            index === currentSlide ? 'active' : ''
                        }`}
                        onClick={() => goToSlide(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default BrandCarousel; */

/* import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Brand {
    name: string;
    image: string; // URL or path to the image
}

interface CarouselProps {
    brands: Brand[];
}

const BrandCarousel: React.FC<CarouselProps> = ({ brands }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div className='slick-next'>&gt;</div>,
        prevArrow: <div className='slick-prev'>&lt;</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div key={index} className='carousel-slide'>
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            width={300}
                            height={200}
                            // fill
                            // unoptimized
                            className='w-52 h-32'
                            // style={{ objectFit: 'contain' }} // Ensures the image fits within the size
                        />
                        <h3>{brand.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BrandCarousel; */
