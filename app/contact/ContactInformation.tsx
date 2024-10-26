import Link from 'next/link';
import React from 'react';
import contactData from '@/static/contact.json';

export default function ContactInformation() {
    const { information } = contactData;

    return (
        <div className='w-full bg-white p-8 my-10 rounded-3xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
            <p className='font-suse font-bold text-slate-400'>
                <span className='tracking-[-2px] pr-3'>{information.line}</span>
                <span>{information.name}</span>
            </p>

            <div className='w-full'>
                <h1 className='text-2xl font-bold font-suse pt-4'>
                    {information.details[0].title}
                </h1>
                <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                    {information.details[0].summery}
                </p>
                <div className='mt-4'>
                    {information.details[0].items.map((item, index) => (
                        <div className='flex gap-3 py-0.5 group' key={index}>
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                className='text-lg text-slate-600 duration-500 group-hover:text-primary'></span>
                            <Link
                                href={item.url}
                                className='font-suse font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <h1 className='text-xl font-bold font-suse pt-4 mt-6'>
                    {information.details[1].title}
                </h1>
                <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                    {information.details[1].summery}
                </p>
                <div className='mt-4'>
                    {information.details[1].items.map((item, index) => (
                        <div key={index} className='flex gap-3 py-0.5 group'>
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                className='text-lg text-slate-600 duration-500 group-hover:text-primary'></span>
                            <Link
                                href={item.url}
                                target='_blank'
                                className='font-suse font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <h1 className='text-xl font-bold font-suse pt-4 mt-6'>
                    {information.details[2].title}
                </h1>
                <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                    {information.details[2].summery}
                </p>
                <div className='mt-4'>
                    {information.details[2].items.map((item, index) => (
                        <div key={index} className='flex gap-3 py-0.5 group'>
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                className='text-lg text-slate-600 duration-500 group-hover:text-primary'></span>
                            <Link
                                href={item.url}
                                target='_blank'
                                className='font-suse font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <h1 className='text-xl font-bold font-suse pt-4 mt-6'>
                    {information.details[3].title}
                </h1>
                <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500 mb-3'>
                    {information.details[3].summery}
                </p>

                {information.details[3].items.map((item, i) => (
                    <div
                        key={i}
                        className='flex gap-3 py-0.5 group mt-2 -mb-2.5'>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: item.icon,
                            }}
                            className='text-lg text-slate-600 duration-500 group-hover:text-primary'></span>
                        <Link
                            href={item.url}
                            target='_blank'
                            className='font-suse break-all font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
