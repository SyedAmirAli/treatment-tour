import React from 'react';
interface ServicesDetailsType {
    description?: string;
    title: string;
    name?: null | string;
}

export default function ServiceDetails({
    title,
    name = null,
    description = 'From business cards to banners, HelloPrint offers a wide range of online printing &amp; personalized print products to enhance your brand and marketing efforts, catering to all your professional and personal printing needs.',
}: ServicesDetailsType) {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='mb-1 lg:mb-3 text-xl lg:text-2xl xl:text-3xl font-medium text-center'>
                {title}
                {name && name.length > 0 && (
                    <span className='px-1 text-primary font-bold'>{name}</span>
                )}
            </h1>
            <div className='max-w-4xl text-center text-sm lg:text-lg leading-4 lg:leading-5 font-suse'>
                {description}
            </div>
        </div>
    );
}
