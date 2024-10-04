import info, { asset } from '@/assets/info';
import { useGetCategoriesQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Loading from '../components/commons/Loading';

export default function CategoryBanner() {
    const { isError, isLoading, error, data } =
        useGetCategoriesQuery(undefined);

    info(
        'CategoryBanner.tsx',
        'useGetCategoriesQuery',
        { isError, isLoading, error, data },
        'ignore'
    );

    if (isLoading) return <Loading />;

    return (
        <div className='container'>
            <div className='flex flex-wrap sm:items-center justify-center gap-2.5 px-2 sm:gap-5 py-5'>
                {data?.map((content: CategoryBannerItemType) => (
                    <CategoryBannerItem
                        key={content.id}
                        categoryBanner={content}
                    />
                ))}
            </div>
        </div>
    );
}

interface CategoryBannerItemType {
    id: number;
    name: string;
    image: string;
    url: string;
}

function CategoryBannerItem({
    categoryBanner,
}: {
    categoryBanner: CategoryBannerItemType;
}) {
    const { name, image, id } = categoryBanner;

    return (
        <Link
            href={`/treatment/${id}`}
            className='w-[47%] sm:w-auto bg-white p-4 flex flex-col items-center justify-self-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] rounded-3xl duration-500
            hover:scale-110 group'>
            <Image
                width={60}
                height={60}
                src={asset(image)}
                alt={name}
                className='w-32 h-28 rounded-2xl border-2 border-solid border-slate-400 hover:border-primary duration-300'
            />
            <span className='mt-4 text-center font-medium text-md leading-5 text-slate-600 group-hover:text-primary group-hover:fill-primary'>
                {name}
            </span>
        </Link>
    );
}
