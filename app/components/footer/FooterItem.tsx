import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footerData from '@/static/footer.json';

export default function FooterItem() {
    const { details, bottomBreadcrumb } = footerData;

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='container'>
                <hr className='h-px w-full border-t border-solid border-slate-300/70 mt-6 mb-10' />
                <div className='w-full flex flex-col 2xl:flex-row gap-y-10'>
                    <div className='w-full flex flex-col md:flex-row gap-y-10'>
                        <div className='w-full'>
                            <figure className='w-full'>
                                <Image
                                    src={details.image}
                                    alt='Logo'
                                    width={200}
                                    height={8 * 16}
                                />
                            </figure>
                            <p className='py-3 px-1 text-justify text-lg font-semibold'>
                                {details.summery}
                            </p>
                            <form
                                className='relative'
                                action={details.actionUrl}>
                                <input
                                    type='text'
                                    placeholder={details.placeholder}
                                    className='bg-slate-100 w-full border border-primary border-solid rounded-lg py-2 px-4'
                                />
                                <button
                                    type='submit'
                                    className='absolute right-0 top-0 bg-primary text-slate-100 text-xl px-3 py-[7px] rounded-md hover:bg-slate-900 duration-500'>
                                    <i
                                        className='fa-solid fa-paper-plane'
                                        aria-hidden='true'></i>
                                </button>
                            </form>
                        </div>
                        <div className='w-full md:px-12'>
                            <h1 className='text-xl font-bold'>Company</h1>
                            <ul className='p-2 mt-2'>
                                <li className='flex gap-3 items-center justify-start my-2'>
                                    <i
                                        className='fa-solid fa-angles-right text-primary'
                                        aria-hidden='true'></i>
                                    <Link
                                        href='#'
                                        className='duration-500 hover:ml-3 hover:text-primary font-semibold hover:underline text-lg'>
                                        About Us
                                    </Link>
                                </li>
                                <li className='flex gap-3 items-center justify-start my-2'>
                                    <i
                                        className='fa-solid fa-angles-right text-primary'
                                        aria-hidden='true'></i>
                                    <Link
                                        href='#'
                                        className='duration-500 hover:ml-3 hover:text-primary font-semibold hover:underline text-lg'>
                                        Company History
                                    </Link>
                                </li>
                                <li className='flex gap-3 items-center justify-start my-2'>
                                    <i
                                        className='fa-solid fa-angles-right text-primary'
                                        aria-hidden='true'></i>
                                    <Link
                                        href='#'
                                        className='duration-500 hover:ml-3 hover:text-primary font-semibold hover:underline text-lg'>
                                        Need a Career
                                    </Link>
                                </li>
                                <li className='flex gap-3 items-center justify-start my-2'>
                                    <i
                                        className='fa-solid fa-angles-right text-primary'
                                        aria-hidden='true'></i>
                                    <Link
                                        href='#'
                                        className='duration-500 hover:ml-3 hover:text-primary font-semibold hover:underline text-lg'>
                                        Working Process
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-y-10'>
                        <div className='w-full md:px-12'>
                            <h1 className='text-xl font-bold'>News News</h1>
                            <div className='p-3 mt-2'>
                                <p>
                                    <i
                                        className='fa-solid fa-calendar-days'
                                        aria-hidden='true'></i>
                                    <span className='font-bold text-sm text-slate-600 px-2'>
                                        24th Nov 2020
                                    </span>
                                </p>
                                <Link
                                    href='#'
                                    className='font-semibold text-lg mt-1 leading-6 duration-300 hover:text-primary hover:underline block'>
                                    User’s Perspes Using Story Structure
                                </Link>
                            </div>
                            <div className='p-3 mt-2'>
                                <p>
                                    <i
                                        className='fa-solid fa-calendar-days'
                                        aria-hidden='true'></i>
                                    <span className='font-bold text-sm text-slate-600 px-2'>
                                        15th July 2023
                                    </span>
                                </p>
                                <Link
                                    href='#'
                                    className='font-semibold text-lg mt-1 leading-6 duration-300 hover:text-primary hover:underline block'>
                                    Optimiz For Assistive Technology Users
                                </Link>
                            </div>
                            <div className='p-3 mt-2'>
                                <p>
                                    <i
                                        className='fa-solid fa-calendar-days'
                                        aria-hidden='true'></i>
                                    <span className='font-bold text-sm text-slate-600 px-2'>
                                        15th June 2023
                                    </span>
                                </p>
                                <Link
                                    href='#'
                                    className='font-semibold text-lg mt-1 leading-6 duration-300 hover:text-primary hover:underline block'>
                                    Optimiz For Assistive Internet Users
                                </Link>
                            </div>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-xl font-bold mb-4'>
                                Contact Us
                            </h1>
                            <div className='px-3 py-1'>
                                <div className='flex gap-4'>
                                    <figure className='text-primary text-2xl'>
                                        <i
                                            className='fa-solid fa-location-dot'
                                            aria-hidden='true'></i>
                                    </figure>
                                    <span className='font-bold text-lg text-slate-600'>
                                        256 Elizaberth Ave, Brooklyn, CA, 90025
                                    </span>
                                </div>
                            </div>
                            <div className='px-3 py-1'>
                                <div className='flex gap-4'>
                                    <figure className='text-primary text-2xl'>
                                        <i
                                            className='fa-solid fa-envelope-open-text'
                                            aria-hidden='true'></i>
                                    </figure>
                                    <span className='font-bold text-lg text-slate-600'>
                                        info@supportexam.com
                                    </span>
                                </div>
                            </div>
                            <div className='px-3 py-1'>
                                <div className='flex gap-4'>
                                    <figure className='text-primary text-2xl'>
                                        <i
                                            className='fa-solid fa-phone-volume'
                                            aria-hidden='true'></i>
                                    </figure>
                                    <span className='font-bold text-lg text-slate-600'>
                                        +012 (345) 678 99
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <hr className='h-px w-full border-t border-solid border-slate-300/70 mt-4' />
            <div className='bg-slate-100 w-full flex items-center justify-center'>
                <div className='container flex flex-col gap-2 md:gap-0 md:flex-row py-4 items-center justify-between'>
                    <div className='flex flex-col sm:flex-row items-center justify-center'>
                        <p className='font-medium text-slate-500'>
                            {bottomBreadcrumb.copyright.name}
                            <b className='text-lg text-primary italic px-1.5'>
                                {new Date().getFullYear()}
                            </b>
                            {bottomBreadcrumb.copyright.title}
                        </p>
                        <Link
                            href={bottomBreadcrumb.copyright.actionUrl}
                            className='px-1 font-bold text-slate-600 hover:underline hover:text-primary hover:tracking-wide duration-500'
                            target={bottomBreadcrumb.copyright.actionTarget}>
                            {bottomBreadcrumb.copyright.actionName}
                        </Link>
                    </div>

                    <div className='flex gap-2'>
                        {bottomBreadcrumb.social.map((social, i) => (
                            <Link
                                className='block px-2.5 py-1 duration-500 bg-white text-primary border border-solid border-primary rounded-md hover:bg-primary text-lg hover:text-white'
                                href={social.url}
                                target={social.target}
                                key={i}>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: social.icon,
                                    }}></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
