import assets from '@/assets';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ElementCard() {
    const cards = [
        {
            id: 1,
            image: '/images/1.jpg',
            name: 'Bogotá, Colombia',
            rating: 4.9,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-1',
            type: 'premium',
        },
        {
            id: 2,
            image: '/images/2.jpg',
            name: 'Carlos Merlano',
            rating: 2.3,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-2',
            type: 'new',
        },
        {
            id: 3,
            image: '/images/3.jpg',
            name: 'Dr. Dario Juris',
            rating: 4,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-3',
            type: 'premium',
        },
        {
            id: 4,
            image: '/images/4.jpg',
            name: 'Barranquilla',
            rating: 1,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-4',
            type: 'new',
        },
        {
            id: 5,
            image: '/images/5.jpg',
            name: 'Bogotá, Colombia',
            rating: 3,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-5',
            type: 'new',
        },
        {
            id: 6,
            image: '/images/6.jpg',
            name: 'Jaime Losada Ruiz',
            rating: 5,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-6',
            type: 'premium',
        },
        {
            id: 7,
            image: '/images/7.jpg',
            name: 'Jaime Losada Ruiz',
            rating: 2.9,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-7',
            type: 'premium',
        },
        {
            id: 8,
            image: '/images/8.jpg',
            name: 'Bogotá, Colombia',
            rating: 3.6,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-8',
            type: 'new',
        },
        {
            id: 9,
            image: '/images/9.jpg',
            name: 'Harker y Lloreda',
            rating: 4.3,
            title: 'Medellin, Colombia',
            slug: 'xyz-slug-9',
            type: 'premium',
        },
    ];
    return (
        <div className='container py-6 flex items-center justify-center flex-wrap gap-8 px-3 sm:px-0'>
            {cards.map((card) => (
                <CardItem key={card.id} card={card} />
            ))}
        </div>
    );
}

interface CardItemType {
    id: Number;
    name: string;
    image: string;
    slug: string;
    rating: number;
    title: string;
    type: string;
}

function CardItem({ card }: { card: CardItemType }) {
    const { title, image, name, slug, rating, type } = card;
    const dispatch = useAppDispatch();

    return (
        <Link
            href={'/doctor/' + slug}
            className='block w-full md:w-[47%] xl:w-[31%] 2xl:w-[23%] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] rounded-2xl'>
            <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='rounded-t-xl duration-500 hover:scale-105 object-cover'
                />

                {type === 'premium' && (
                    <p className='-rotate-45 top-6 -left-9 z-10 absolute py-0.5 px-9 bg-green-500 text-slate-100 font-medium uppercase'>
                        PREMIUM
                    </p>
                )}

                {type === 'new' && (
                    <p className='absolute top-2 left-2 bg-primary text-sm py-1 px-3 rounded-lg z-20 text-slate-100 font-medium uppercase'>
                        NEW
                    </p>
                )}

                <ul className='absolute right-0 flex top-0 opacity-0 duration-500 group-hover:opacity-100'>
                    <li className='py-2'>
                        <button className='size-9 p-2 text-primary fill-primary bg-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:bg-primary hover:fill-white duration-500'>
                            {assets.svg.cartDown}
                        </button>
                    </li>
                    <li className='p-2'>
                        <button className='size-9 p-2 text-green-500 fill-green-500 bg-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:bg-green-500 hover:fill-white duration-500'>
                            {assets.svg.handHoldingHeart}
                        </button>
                    </li>
                </ul>
            </figure>
            <div className='p-4 flex w-full justify-between'>
                <div>
                    <h2 className='font-bold text-lg text-slate-900 hover:underline hover:text-primary duration-500'>
                        {name}
                    </h2>
                    <h4>{title}</h4>
                </div>
                <div>
                    <ul className='flex gap-0.5 items-center justify-center'>
                        <li className='font-bold pr-2 text-slate-400'>
                            ({rating})
                        </li>
                        {Array.from({ length: Math.max(0, 5) }).map((_, i) =>
                            i <= rating ? (
                                <i
                                    key={i}
                                    className='size-5 p-0.5 bg-white fill-primary text-primary rounded block'>
                                    {assets.svg.starFill}
                                </i>
                            ) : (
                                <i
                                    key={i}
                                    className='size-5 p-1 bg-primary fill-white text-white rounded block'>
                                    {assets.svg.starFill}
                                </i>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </Link>
    );
}
