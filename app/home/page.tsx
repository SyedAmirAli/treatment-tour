'use client';
import assets from '@/assets';
import { useState } from 'react';

export default function Root() {
    const [searchMenu, setSearchMenu] = useState<{ status: boolean }>({
        status: false,
    });

    return (
        <div className='w-full min-h-screen bg-white bg-gradient-to-tr from-blue-300/10 to-purple-300/10 via-pink-300/10'>
            <div className='w-full bg-white h-20 justify-center px-2 flex flex-col items-center border-b border-solid border-primary/20'>
                <header className='container'>
                    <nav className='w-full flex justify-between items-center'>
                        <figure className='flex gap-2'>
                            <i className='block w-10 h-10 fill-primary'>
                                {assets.svg.wandMagicSparkle}
                            </i>

                            <p className='font-bold text-xl uppercase tracking-wide'>
                                <span className='block leading-5 text-blue-500'>
                                    medicare
                                </span>
                                <span className='block leading-5 text-primary'>
                                    medicines
                                </span>
                            </p>
                        </figure>
                        <ul className='flex gap-12'>
                            {[
                                {
                                    title: 'Contacts',
                                    icon: assets.svg.cardClip,
                                    children: [
                                        { title: 'Locations' },
                                        { title: 'Colombia' },
                                        { title: 'Costa Rica' },
                                        { title: 'Indonesia' },
                                        { title: 'Mexico' },
                                        { title: 'Singapore' },
                                        { title: 'South Korea' },
                                        { title: 'Thailand' },
                                        { title: 'Turkey' },
                                        { title: 'More Locations' },
                                    ],
                                },
                                {
                                    title: 'Locations',
                                    icon: assets.svg.locationCrosshair,
                                    children: [],
                                },
                                {
                                    title: 'Treatments',
                                    icon: assets.svg.gem,
                                    children: [],
                                },
                                {
                                    title: 'More',
                                    icon: assets.svg.downLeftAndUpRight,
                                    children: [],
                                },
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className={
                                        'group w-32 flex items-center justify-center relative ' +
                                        (i === 0 ? 'active' : '')
                                    }>
                                    <button className='text-md flex gap-1 items-center justify-center font-semibold bg-slate-100 px-4 rounded-full py-3 text-slate-600 fill-slate-600 h-[44px] duration-300 group-hover:bg-primary group-hover:text-slate-100 group-[.active]:bg-primary group-[.active]:text-slate-100'>
                                        <i className='block group-hover:pr-2 group-[.active]:pr-2 duration-500 w-0 h-0 group-hover:w-7 group-hover:h-7 group-[.active]:w-7 group-[.active]:h-7 group-[.active]:fill-slate-100 group-hover:fill-slate-100'>
                                            {item.icon}
                                        </i>
                                        <span className='leading-3'>
                                            {item.title}
                                        </span>
                                        <i className='block h-3 w-3 duration-500 group-hover:fill-slate-100 group-hover:rotate-90 group-[.active]:fill-slate-100 group-[.active]:rotate-90'>
                                            {assets.svg.chevronRight}
                                        </i>
                                    </button>

                                    {item.children.length > 0 && (
                                        <ul className='absolute top-14 left-0 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] p-4'>
                                            {item.children?.map((cItem, i) => (
                                                <li
                                                    key={i}
                                                    className='py-1 group children'>
                                                    <a
                                                        href='#'
                                                        className='flex gap-2 py-4 rounded-lg px-3 font-medium text-lg capitalize w-full justify-between items-center bg-slate-50 text-slate-500 border border-solid border-slate-100 hover:bg-slate-100 hover:text-primary hover:fill-primary hover:tracking-wide duration-500'>
                                                        <span className='leading-3 text-nowrap'>
                                                            {cItem.title}
                                                        </span>
                                                        <i className='block size-3 duration-500 group-[.children:hover]:rotate-90'>
                                                            {
                                                                assets.svg
                                                                    .chevronRight
                                                            }
                                                        </i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className='flex gap-10'>
                            <div className='flex text-sm font-medium gap-1.5 items-center justify-center'>
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

                            <div className='flex gap-6'>
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
                                <button className='flex gap-3 items-center justify-center bg-black border border-solid border-slate-300 px-3 py-2 rounded-md uppercase font-bold text-slate-100 text-sm fill-slate-100 duration-500 hover:bg-primary'>
                                    <i className='w-4 h-4'>
                                        {assets.svg.login}
                                    </i>
                                    <span>Login</span>
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
                                        <span className='block pb-0.5'>
                                            close
                                        </span>
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
                                        <div
                                            key={item.id}
                                            className='pr-4 py-2'>
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
                                                                        assets
                                                                            .svg[
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
                                                    consectetur, adipisicing
                                                    elit. Nulla voluptatum
                                                    corporis blanditiis dicta?
                                                    Nam ut eveniet nisi sed
                                                    consequuntur .
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
        </div>
    );
}
