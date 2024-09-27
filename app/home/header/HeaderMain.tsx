import React from 'react';
import assets from '@/assets';
import { useState } from 'react';
import Menu from './Menu';

export default function HeaderMain() {
    const [searchMenu, setSearchMenu] = useState<{ status: boolean }>({
        status: false,
    });

    const [activeNav, setActiveNav] = useState(false);

    return (
        <div className='w-full bg-white h-20 justify-center px-2 flex flex-col items-center border-b border-solid border-primary/20 fixed z-40 top-0 left-0'>
            <header className='container'>
                <nav className='w-full flex justify-between items-center px-2 sm:px-0'>
                    <figure className='flex gap-2'>
                        <i className='block size-8 sm:size-10 fill-primary'>
                            {assets.svg.wandMagicSparkle}
                        </i>

                        <p className='font-bold text-sm sm:text-xl uppercase tracking-wide'>
                            <span className='block leading-5 text-blue-500'>
                                medicare
                            </span>
                            <span className='block leading-5 text-primary'>
                                medicines
                            </span>
                        </p>
                    </figure>

                    <div
                        className={`hidden 2xl:!block ${
                            activeNav ? '!block' : 'hidden'
                        }`}>
                        <Menu />
                    </div>

                    <div className='flex gap-10'>
                        <div className='hidden md:flex text-sm font-medium gap-1.5 items-center justify-center'>
                            <span>Toll Free</span>
                            <i className='block h-4 w-4 ml-2 fill-primary'>
                                {assets.svg.phoneVolume}
                            </i>
                            <a
                                href='#'
                                className='font-bold text-primary duration-300 hover:underline'>
                                +1-855-912-8960
                            </a>
                        </div>

                        <div className='flex items-center gap-3 sm:gap-6'>
                            <button
                                className='text-sm relative bg-slate-100 border border-solid border-slate-300 p-2 rounded-full capitalize font-bold fill-primary duration-500 hover:bg-primary hover:fill-slate-100 group'
                                onClick={function () {
                                    setSearchMenu({
                                        ...searchMenu,
                                        status: !searchMenu.status,
                                    });
                                }}>
                                <span className='text-sm w-5 h-5 block'>
                                    {assets.svg.search}
                                </span>
                                <span className='opacity-0 duration-500 group-hover:opacity-100 absolute text-nowrap bg-primary text-slate-100 px-2 rounded-full font-medium top-10 -left-4'>
                                    find now
                                </span>
                            </button>
                            <button className='text-sm bg-slate-100 border border-solid border-slate-300 p-2 rounded-full capitalize font-bold text-slate-600 fill-slate-600 duration-500 hover:bg-primary hover:fill-slate-100 relative group'>
                                <span className='text-sm w-5 h-5 block'>
                                    {assets.svg.home}
                                </span>
                                <span className='opacity-0 duration-500 group-hover:opacity-100 absolute text-nowrap bg-primary text-slate-100 px-2 rounded-full font-medium top-10 -left-4'>
                                    User Profile
                                </span>
                            </button>
                            <button className='flex gap-3 items-center justify-center bg-black border border-solid border-slate-300 px-3 py-3 sm:py-2 sm:rounded-md uppercase font-bold text-slate-100 text-sm fill-slate-100 duration-500 hover:bg-primary rounded-full'>
                                <i className='w-4 h-4'>{assets.svg.login}</i>
                                <span className='hidden sm:block'>Login</span>
                            </button>
                            <button
                                className={`block 2xl:hidden size-12 rounded-lg p-2 sm:size-10 text-white fill-white ${
                                    activeNav ? 'bg-black' : 'bg-primary'
                                }`}
                                onClick={() => setActiveNav(!activeNav)}>
                                {assets.svg[activeNav ? 'close' : 'menu']}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Search Bar */}
            {searchMenu.status && (
                <div className='fixed top-0 flex items-center justify-center left-0 w-full h-screen bg-black/10 z-20'>
                    <div className='max-w-xl bg-white p-6 w-full border border-solid border-slate-300 rounded-xl'>
                        <form className='w-full border-b border-solid border-slate-300 mb-2 pb-5'>
                            <div className='w-full flex items-center justify-center'>
                                <input
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
                                    onClick={function () {
                                        setSearchMenu({
                                            ...searchMenu,
                                            status: !searchMenu.status,
                                        });
                                    }}>
                                    <i className='block size-4 rotate-45 group-hover:rotate-0 duration-500'>
                                        {assets.svg.close}
                                    </i>
                                    <span className='block pb-0.5'>close</span>
                                </button>
                            </div>

                            <div className='w-full mt-3 max-h-[50vh] overflow-y-scroll'>
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
                                                                        i >=
                                                                        item.rating
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
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Nulla voluptatum corporis
                                                blanditiis dicta? Nam ut eveniet
                                                nisi sed consequuntur .
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
