import Image from 'next/image';
import React from 'react';

export default function PaymentService() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Payment And Services
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <div className='flex justify-between items-center w-full mt-4'>
                        {[
                            '/images/bank.png',
                            '/images/cash.jpg',
                            '/images/paypal.png',
                            '/images/visacard.png',
                            '/images/mastercard.svg',
                        ].map((img, i) => (
                            <figure
                                key={i}
                                // className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group h-40"
                            >
                                <Image
                                    className='duration-500 hover:scale-105 object-cover'
                                    src={img}
                                    alt={i + '-img'}
                                    width={100}
                                    height={100}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
