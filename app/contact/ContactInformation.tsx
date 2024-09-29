import Link from 'next/link';
import React from 'react';

export default function ContactInformation() {
    return (
        <div className='w-full bg-white p-8 my-10 rounded-3xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
            <p className='font-suse font-bold text-slate-400'>
                <span className='tracking-[-2px] pr-3'>---------</span>
                <span>Contact</span>
            </p>

            <h1 className='text-2xl font-bold font-suse pt-4'>
                Contact with us
            </h1>
            <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt fugit dignissimos, provident dolore iste tenetur quod
                id in consequuntur reiciendis ipsum cumque aspernatur.
            </p>
            <div className='mt-4'>
                {[
                    {
                        title: 'Start a live chat',
                        url: '#',
                        icon: `<i class='fa-solid fa-paper-plane'></i>`,
                    },
                    {
                        title: 'Short us an email',
                        url: '#',
                        icon: `<i class='fa-solid fa-envelope-open-text'></i>`,
                    },
                    {
                        title: 'Message us on X',
                        url: '#',
                        icon: `<i class='fa-brands fa-x-twitter'></i>`,
                    },
                ].map((item, index) => (
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

            <h1 className='text-xl font-bold font-suse pt-4 mt-6'>Call us</h1>
            <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='mt-4'>
                {[
                    {
                        title: 'BD | (+880) 18-807594',
                        url: '#',
                        icon: `<i class='fa-solid fa-phone-volume'></i>`,
                    },
                    {
                        title: '009 5568 9087',
                        url: '#',
                        icon: `<i class='fa-solid fa-phone-slash'></i>`,
                    },
                ].map((item, index) => (
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

            <h1 className='text-xl font-bold font-suse pt-4 mt-6'>Visit us</h1>
            <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='mt-4'>
                {[
                    {
                        title: '09:30 AM - 07:30 PM (Office Hour)',
                        url: '#',
                        icon: `<i class='fa-solid fa-timeline'></i>`,
                    },
                    {
                        title: '100 Smith Street, Collingwood VIC 3066',
                        url: '#',
                        icon: `<i class='fa-solid fa-hotel'></i>`,
                    },
                ].map((item, index) => (
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

            <h1 className='text-xl font-bold font-suse pt-4 mt-6'>
                View us in Maps
            </h1>
            <p className='text-sm font-comfortaa mt-2 leading-[1.25] text-slate-500 mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className='flex gap-3 py-0.5 group mt-2'>
                <span className='text-lg text-slate-600 duration-500 group-hover:text-primary'>
                    <i className='fa-solid fa-location-dot'></i>
                </span>
                <Link
                    href='https://maps.app.goo.gl/THUMqQbQZgdbJid67'
                    target='_blank'
                    className='font-suse break-all font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                    https://maps.app.goo.gl/THUMqQbQZgdbJid67
                </Link>
            </div>
            <div className='flex gap-3 py-0.5 group -mt-1'>
                <span className='text-lg text-slate-600 duration-500 group-hover:text-primary'>
                    <i className='fa-solid fa-location-pin-lock'></i>
                </span>
                <Link
                    href='https://maps.app.goo.gl/THUMqQbQZgdbJid67'
                    target='_blank'
                    className='font-suse break-all font-bold text-slate-600 duration-500 group-hover:text-primary group-hover:tracking-wide underline'>
                    https://maps.app.goo.gl/THUMqQbQZgdbJid67
                </Link>
            </div>
        </div>
    );
}
