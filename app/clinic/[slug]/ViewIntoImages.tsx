'use client';
import { asset } from '@/assets/info';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ViewIntoImages({
    closeModal,
    image,
    photos,
}: {
    closeModal: () => void;
    image: string;
    photos: string[];
}) {
    const [activeImg, setActiveImg] = useState(image);

    return (
        <div className='fixed left-0 top-0 bg-black/30 w-full z-10 h-screen max-h-screen flex items-center justify-center'>
            <div className='container py-20 relative'>
                <div className='w-full bg-white pt-20 rounded-lg relative'>
                    <figure
                    // className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group"
                    >
                        <Image
                            className='rounded-t-xl w-full object-cover h-[76vh]'
                            src={asset(activeImg)}
                            alt='activeImg'
                            height={1080}
                            width={1920}
                        />

                        <button
                            className='absolute top-28 right-7 bg-red-500 duration-500 hover:rotate-180 py-4 px-[22.5px] rotate-45 hover:bg-primary text-white rounded-full text-xl'
                            onClick={closeModal}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </figure>

                    <div className='flex items-center justify-center p-4 gap-4 flex-wrap'>
                        {[image, ...photos].map((img, i) => (
                            <figure
                                key={i}
                                className='cursor-pointer'
                                onClick={() => setActiveImg(img)}>
                                <Image
                                    className='rounded-xl !w-28 !h-28 border-solid border-primary'
                                    src={asset(img)}
                                    alt={'image-' + i}
                                    height={100}
                                    width={100}
                                    style={{
                                        borderWidth:
                                            img === activeImg ? '4px' : '0',
                                    }}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
