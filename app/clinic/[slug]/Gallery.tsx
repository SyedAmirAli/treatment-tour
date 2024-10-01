import { asset } from '@/assets/info';
import Image from 'next/image';
import React from 'react';

export default function Gallery({
    openModal,
    image,
    photos,
}: {
    openModal: () => void;
    image: string;
    photos: string[];
}) {
    return (
        <div className='w-full bg-white flex flex-col lg:flex-row my-6 border border-solid border-slate-300 rounded-md overflow-hidden'>
            <div className='w-full'>
                <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                    <Image
                        className='rounded-t-xl duration-500 hover:scale-105 object-cover'
                        src={asset(image)}
                        alt=''
                        fill
                    />
                </figure>
            </div>
            <div className='w-full flex flex-wrap h-full relative'>
                {[image, ...photos].map((img, i) => (
                    <div className='w-1/2 overflow-hidden' key={i}>
                        <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                            <Image
                                className='duration-500 hover:scale-105 object-cover'
                                src={asset(img)}
                                alt={i + '-img'}
                                fill
                            />
                        </figure>
                    </div>
                ))}

                <div className='absolute bottom-6 right-6 '>
                    <button
                        className='bg-white py-2 px-4 text-center rounded-md flex gap-2 items-center justify-center font-bold text-sm shadow-xl duration-500 hover:tracking-wide hover:bg-primary hover:text-white'
                        onClick={openModal}>
                        <i className='fa-solid fa-box mr-2 text-xl'></i>
                        <span className='capitalize'>Show all photos</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
