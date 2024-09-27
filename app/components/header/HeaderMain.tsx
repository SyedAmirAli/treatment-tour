'use client';
import React from 'react';
import assets from '@/assets';
import { useState } from 'react';
import Menu from './Menu';
import SearchModal from './SearchModal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearch } from '@/redux/slices/HeaderSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderMain() {
    const search = useAppSelector((state) => state.header.search);
    const dispatch = useAppDispatch();

    function openSearchModal() {
        dispatch(setSearch({ status: true }));
    }

    const [activeNav, setActiveNav] = useState(false);

    return (
        <div className='w-full bg-white h-20 justify-center px-2 flex flex-col items-center border-b border-solid border-primary/20 fixed z-40 top-0 left-0'>
            <header className='container'>
                <nav className='w-full flex justify-between items-center px-2 sm:px-0'>
                    <Link href='/' className='flex items-center'>
                        {/* <i className='block size-8 sm:size-10 fill-primary'>
                            {assets.svg.wandMagicSparkle}
                        </i> */}
                        <Image
                            src='/images/logo.jpeg'
                            width={80}
                            height={30}
                            alt='Logo'
                        />

                        <p className='font-bold text-sm sm:text-xl uppercase tracking-wide'>
                            <span className='block leading-5 text-blue-500'>
                                treatment
                            </span>
                            <span className='block leading-5 text-primary'>
                                tour
                            </span>
                        </p>
                    </Link>

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
                                onClick={openSearchModal}>
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
            {search.status && <SearchModal />}
        </div>
    );
}
