import React from 'react';
import BrandCarousel from './BrandCarousel';
import { useGetFeaturedGalleryQuery } from '@/redux/api/apiSlice';
import info, { asset } from '@/assets/info';
import Loading from '../components/commons/Loading';

export default function Brands() {
    const { isError, isLoading, error, data } =
        useGetFeaturedGalleryQuery(undefined);

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

    if (isLoading) return <Loading />;

    return (
        Array.isArray(data?.data) && (
            <div className='w-full flex items-center justify-center'>
                <div className='container'>
                    <div className='mb-8'>
                        <h2 className='font-bold text-xl text-primary'>
                            <span className='tracking-[-4px] pr-4'>----</span>
                            <span className='capitalize'>Brands</span>
                        </h2>
                        <h1 className='text-2xl font-medium mt-2'>
                            Our Latest Case Studies ss
                        </h1>
                    </div>

                    <BrandCarousel
                        brands={data?.data?.map(
                            (gallery: GalleryDetailType) => ({
                                title: gallery.name,
                                image: asset(gallery.image),
                            })
                        )}
                    />
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
