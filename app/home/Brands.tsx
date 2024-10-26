import React from 'react';
import BrandCarousel from './BrandCarousel';
import { useGetFeaturedGalleryQuery } from '@/redux/api/apiSlice';
import info, { asset } from '@/assets/info';
import Loading from '../components/commons/Loading';
import homeData from '@/static/homepage.json';
// import EmblaCarousel from '../components/carousel/EmblaCarousel';

export default function Brands() {
    const { isError, isLoading, error, data } =
        useGetFeaturedGalleryQuery(undefined);

    const { brands } = homeData;

    info(
        'Brands.tsx',
        'useGetFeaturedGalleryQuery',
        {
            isError,
            isLoading,
            error,
            data,
        },
        'ignore'
    );

    const brandCarouselItems: GalleryDetailType[] = data?.data?.map(
        (gallery: GalleryDetailType) => ({
            title: gallery.name,
            image: asset(gallery.image),
        })
    );

    if (isLoading) return <Loading />;

    return (
        Array.isArray(data?.data) && (
            <div className='w-full flex items-center justify-center'>
                <div className='container'>
                    <div className='mb-8'>
                        <h2 className='font-bold text-xl text-primary'>
                            <span className='tracking-[-4px] pr-4'>
                                {brands.line}
                            </span>
                            <span className='capitalize'>{brands.name}</span>
                        </h2>
                        <h1 className='text-2xl font-medium mt-2'>
                            {brands.title}
                        </h1>
                    </div>

                    {brandCarouselItems.length && (
                        <BrandCarousel
                            brands={brandCarouselItems}
                            height={200}
                        />
                    )}
                </div>
            </div>
        )
    );
}
interface GalleryDetailType {
    id: number;
    name: string;
    image: string;
    created_at: string;
    updated_at: string;
}
