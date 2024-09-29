import React from 'react';

export default function FooterTitle() {
    return (
        <div className='container'>
            <div className='w-full flex flex-col items-center justify-center pt-10'>
                <h1 className='mb-1 lg:mb-3 text-xl lg:text-2xl xl:text-3xl font-medium text-center'>
                    Online Medicare Services with
                    <span className='px-1 text-primary font-bold'>
                        Treatment Tour
                    </span>
                </h1>
                <p className='max-w-4xl text-center text-sm lg:text-lg leading-4 lg:leading-5 font-suse'>
                    From business cards to banners, HelloPrint offers a wide
                    range of online printing &amp; personalised print products
                    to enhance your brand and marketing efforts, catering to all
                    your professional and personal printing needs.
                </p>
            </div>
        </div>
    );
}
