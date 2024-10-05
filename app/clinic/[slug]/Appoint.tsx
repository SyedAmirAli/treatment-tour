'use client';

import React, { useState } from 'react';
import BookAppointModal from './BookAppointModal';
import ContactClinicModal from './ContactClinicModal';
interface AppointProps {
    name: string | undefined;
    title: string;
    description: string;
}

const Appoint: React.FC<AppointProps> = ({ name, title, description }) => {
    const [isShow, setIsShow] = useState(false);
    const [isShowAppoint, setIsShowAppoint] = useState(false);
    const [isContactAppoint, setIsContactAppoint] = useState(false);

    return (
        <div className='flex flex-col lg:flex-row justify-self-end'>
            <div className='border-b-1 pb-4 lg:pb-0 border-solid mr-6 w-full lg:w-2/3 border-gray-300 relative mb-5'>
                <h1 className='mt-4 text-3xl font-semibold'>About {name}</h1>
                <p className='mt-2 mb-10 text-md text-justify'>{title}</p>
                <button
                    className='font-medium text-lg bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] px-4 py-2 rounded text-slate-600 hover:text-primary duration-500 hover:tracking-wide'
                    onClick={() => setIsShow(!isShow)}>
                    <span className='pr-3'>Show More</span>
                    <i
                        className='fa-solid fa-chevron-down duration-500'
                        style={{ rotate: isShow ? '180deg' : '0deg' }}></i>
                </button>

                {isShow ? (
                    <div
                        className='py-4 px-1'
                        dangerouslySetInnerHTML={{ __html: description }}></div>
                ) : (
                    <div
                        className='py-4 px-1'
                        dangerouslySetInnerHTML={{
                            __html: description.slice(0, 300) + '...',
                        }}></div>
                )}
            </div>
            <div className='sm:ml-2 mt-4 lg:mt-10 w-full lg:w-1/3 top-0'>
                <div className='box flex flex-col border rounded-md p-10 border-gray-200 items-center text-center shadow-xl'>
                    <button
                        onClick={() => setIsShowAppoint(true)}
                        className='bg-pink-700 p-4 rounded-md w-full text-white text-md hover:bg-pink-800 font-bold duration-500 hover:tracking-wide'>
                        Book Appointment
                    </button>
                    <button
                        onClick={() => setIsContactAppoint(true)}
                        className='border border-gray-700 text-gray-700 text-md font-bold mt-4 p-3 w-full rounded-md hover:bg-gray-50 duration-500 hover:tracking-wide hover:text-primary'>
                        Contact Clinic
                    </button>
                </div>
            </div>

            {isShowAppoint && (
                <BookAppointModal closeModal={() => setIsShowAppoint(false)} />
            )}

            {isContactAppoint && (
                <ContactClinicModal
                    closeModal={() => setIsContactAppoint(false)}
                />
            )}
        </div>
    );
};

export default Appoint;
