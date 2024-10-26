import { asset } from '@/assets/info';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Gallery({
    openModal,
    image,
    photos,
}: {
    openModal: () => void;
    image: string;
    photos: string[];
}) {
    const [activeImg, setActiveImg] = useState<string | null>(null);
    return (
        <div className='w-full bg-white flex flex-col lg:flex-row my-6 border border-solid border-slate-300 rounded-md overflow-hidden'>
            <div className='w-full'>
                <figure className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group">
                    <Image
                        className='rounded-t-xl duration-500 hover:scale-105 object-cover'
                        src={asset(image)}
                        alt=''
                        fill
                        onClick={() => setActiveImg(image)}
                    />
                </figure>
            </div>
            <div className='w-full flex flex-wrap h-full relative'>
                {[image, ...photos].slice(0, 4).map((img, i) => (
                    <div className='w-1/2 overflow-hidden' key={i}>
                        <figure
                            className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group"
                            onClick={() => setActiveImg(img)}>
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

            {activeImg && (
                <div className='fixed left-0 top-0 bg-black/30 w-full z-10 h-screen max-h-screen flex items-center justify-center'>
                    <div className='container py-20 relative'>
                        <div className='w-full bg-transparent pt-20 rounded-lg relative'>
                            <figure
                            // className="before:content-[''] before:pt-[65%] before:block relative overflow-hidden group"
                            >
                                <Image
                                    className='rounded-t-xl w-full max-h-[80vh]'
                                    src={asset(activeImg)}
                                    alt='activeImg'
                                    height={1080}
                                    width={1920}
                                />

                                <button
                                    className='absolute top-28 right-7 bg-red-500 duration-500 hover:rotate-180 py-4 px-[22.5px] rotate-45 hover:bg-primary text-white rounded-full text-xl'
                                    onClick={() => setActiveImg(null)}>
                                    <i className='fa-solid fa-xmark'></i>
                                </button>
                            </figure>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
