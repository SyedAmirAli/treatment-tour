import Link from 'next/link';
import React from 'react';

interface ServicesItemType {
    id: number;
    title: string;
    description: string;
    btn_icon: string;
    btn_title: string;
    icon: string;
    btn_url: string;
}
export default function ServicesItem({
    service,
}: {
    service: ServicesItemType;
}) {
    const { title, description, btn_icon, btn_title, icon, btn_url } = service;

    return (
        <div className='w-full lg:w-[48%] xl:w-[31%] p-6 border border-solid border-slate-300 bg-white relative rounded-xl'>
            <div>
                <h2 className='text-xl font-medium'>{title}</h2>
                <p className='text-justify leading-6 py-6'>{description}</p>
                <Link href={btn_url} className='mt-5 block rounded-md'>
                    <button className='flex gap-3 bg-primary text-white px-5 py-2 font-bold capitalize tracking-wide duration-300 hover:tracking-wider rounded hover:bg-black'>
                        <span>{btn_title}</span>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: btn_icon,
                            }}></span>
                    </button>
                </Link>
            </div>
            <div className='absolute bottom-0 text-7xl pr-6 pb-6 text-slate-300 right-0'>
                <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
        </div>
    );
}
