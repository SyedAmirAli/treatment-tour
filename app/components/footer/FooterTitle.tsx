import React from 'react';
import footerData from '@/static/footer.json';

export default function FooterTitle() {
    const { breadcrumb } = footerData;

    return (
        <div className='container'>
            <div className='w-full flex flex-col items-center justify-center pt-10'>
                <h1 className='mb-1 lg:mb-3 text-xl lg:text-2xl xl:text-3xl font-medium text-center'>
                    {breadcrumb.title}
                    <span className='px-1 text-primary font-bold'>
                        {breadcrumb.highlighter}
                    </span>
                </h1>
                <p className='max-w-4xl text-center text-sm lg:text-lg leading-4 lg:leading-5 font-suse'>
                    {breadcrumb.description}
                </p>
            </div>
        </div>
    );
}
