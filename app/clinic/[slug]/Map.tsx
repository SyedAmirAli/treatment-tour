import React from 'react';

export default function Map({ embedCode }: { embedCode: string }) {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl mt-10'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Map
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div
                    className='flex border-t border-solid border-slate-300 mt-5 map'
                    dangerouslySetInnerHTML={{ __html: embedCode }}>
                    {/* <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28933.8261014166!2d90.1307842!3d24.97535835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d3612fd35e6b%3A0xef0a804192ff4970!2sTarakandi%20Bazar!5e0!3m2!1sen!2sbd!4v1727717878061!5m2!1sen!2sbd'
                        allowFullScreen={true}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'></iframe> */}
                </div>
            </div>
        </div>
    );
}
