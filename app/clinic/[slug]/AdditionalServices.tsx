import React from 'react';

export default function AdditionalServices() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Additional Services
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <ul className='flex justify-between w-full mt-4'>
                        <li className='font-medium'>
                            <i className='fa-solid fa-stethoscope mr-2'></i>
                            Free Exam
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-wifi mr-2'></i>
                            Free Wifi
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-droplet mr-2'></i>
                            Free Water
                        </li>
                        <li className='font-medium'>
                            <i className='fa-solid fa-wheelchair mr-2'></i>
                            Wheelchair Accessible
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
