'use client';
import assets from '@/assets';
import { useAppDispatch } from '@/redux/hooks';
import { setSearch } from '@/redux/slices/HeaderSlice';
import React from 'react';

export default function SearchModal() {
    const dispatch = useAppDispatch();

    function closeSearchModal() {
        dispatch(setSearch({ status: false }));
    }
    function searchQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setSearch({ query: event.target.value }));
    }

    return (
        <div className='fixed top-0 flex items-center justify-center left-0 w-full h-screen bg-black/10 z-20 px-2'>
            <div className='max-w-xl bg-white p-6 w-full border border-solid border-slate-300 rounded-xl'>
                <form className='w-full border-b border-solid border-slate-300 mb-2 pb-5'>
                    <div className='w-full flex items-center justify-center'>
                        <input
                            onChange={searchQueryHandler}
                            type='search'
                            placeholder='Find your target'
                            className='w-full bg-slate-100 text-lg border border-solid rounded-s-md border-slate-400 px-3 py-2 text-primary focus:border-primary ring-0 outline-none font-medium tracking-wide font-mono'
                        />
                        <button className='px-3 py-2 bg-black fill-slate-100 rounded-r-md duration-500 hover:bg-primary'>
                            <span className='block w-5 py-[5.25px]'>
                                {assets.svg.sendPlane}
                            </span>
                        </button>
                    </div>
                </form>

                <div className='w-full'>
                    <div className='flex w-full justify-between items-center'>
                        <h1 className='text-xl font-medium'>
                            <span className='text-primary font-bold pr-2'>
                                36
                            </span>
                            Results found in your search.
                        </h1>

                        <button
                            className='flex text-sm bg-primary text-slate-100 fill-slate-100 capitalize font-medium items-center justify-center pl-2 pr-3 py-0.5 rounded-full gap-1 duration-500 hover:bg-red-500 hover:tracking-wide group'
                            onClick={closeSearchModal}>
                            <i className='block size-4 rotate-45 group-hover:rotate-0 duration-500'>
                                {assets.svg.close}
                            </i>
                            <span className='block pb-0.5'>close</span>
                        </button>
                    </div>

                    <div className='w-full mt-3 max-h-[50vh] overflow-y-scroll scrollbar-primary'>
                        {[
                            {
                                id: 1,
                                title: 'Radiant Pharmaceuticals',
                                url: '#',
                                caption: 'best seller',
                                rating: 5,
                                totalRating: 19,
                            },
                            {
                                id: 2,
                                title: 'Squire Pharmaceuticals',
                                url: '#',
                                caption: null,
                                rating: 2,
                                totalRating: 30,
                            },
                            {
                                id: 3,
                                title: 'Eskayef Pharmaceuticals',
                                url: '#',
                                caption: 'popular',
                                rating: 3,
                                totalRating: 99,
                            },
                            {
                                id: 4,
                                title: 'Renata Pharmaceuticals',
                                url: '#',
                                caption: null,
                                rating: 4,
                                totalRating: 25,
                            },
                            {
                                id: 5,
                                title: 'Beximco Pharmaceuticals',
                                url: '#',
                                caption: 'top rated',
                                rating: 2,
                                totalRating: 1000,
                            },
                            {
                                id: 6,
                                title: 'ACI Pharmaceuticals',
                                url: '#',
                                caption: null,
                                rating: 5,
                                totalRating: 1244,
                            },
                            {
                                id: 7,
                                title: 'Square Pharmaceuticals',
                                url: '#',
                                caption: 'best seller',
                                rating: 1,
                                totalRating: 31,
                            },
                            {
                                id: 8,
                                title: 'Incepta Pharmaceuticals',
                                url: '#',
                                caption: 'popular',
                                rating: 4,
                                totalRating: 19,
                            },
                            {
                                id: 9,
                                title: 'Aristopharma Pharmaceuticals',
                                url: '#',
                                caption: null,
                                rating: 2,
                                totalRating: 20,
                            },
                            {
                                id: 10,
                                title: 'Opsonin Pharmaceuticals',
                                url: '#',
                                caption: 'top rated',
                                rating: 5,
                                totalRating: 5,
                            },
                        ].map((item) => (
                            <div key={item.id} className='pr-4 py-2'>
                                <div className='w-full bg-slate-50 border border-solid border-slate-200 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] py-2 px-4'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h3 className='text-lg font-medium text-slate-700'>
                                            {item.title}

                                            {item.caption && (
                                                <span className='px-2 rounded-full ml-3 bg-blue-500 text-slate-100 pb-0.5 font-medium text-xs tracking-wide capitalize'>
                                                    {item.caption}
                                                </span>
                                            )}
                                        </h3>
                                        <div className='mb-1 flex gap-0.5 fill-primary items-center justify-center'>
                                            {new Array(5)
                                                .fill(0)
                                                .map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className='block size-4'>
                                                        {
                                                            assets.svg[
                                                                i >= item.rating
                                                                    ? 'star'
                                                                    : 'starFill'
                                                            ]
                                                        }
                                                    </i>
                                                ))}

                                            <p className='pl-2 text-sm font-medium text-slate-500 tracking-wide'>
                                                ({item.totalRating})
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href='#'
                                        className='text-sm leading-[1.3] pt-1 duration-300 hover:text-blue-500 block hover:underline'>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Nulla voluptatum
                                        corporis blanditiis dicta? Nam ut
                                        eveniet nisi sed consequuntur .
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
