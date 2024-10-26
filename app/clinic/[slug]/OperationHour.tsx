import React from 'react';

export default function OperationHour() {
    return (
        <div className='py-6 bg-white border-b-2 w-full rounded-xl mt-10'>
            <div className='flex flex-col px-6'>
                <div className='flex w-full items-center cursor-pointer justify-between'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        Operation Hours <span className='px-4'>UTC-06</span>
                    </h1>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </div>
                <div className='flex border-t border-solid border-slate-300 mt-3'>
                    <ul className='w-full mt-4'>
                        {[
                            { name: 'MONDAY', time: '09:00 - 17:00' },
                            { name: 'TUESDAY', time: '09:00 - 17:00' },
                            { name: 'WEDNESDAY', time: '09:00 - 17:00' },
                            { name: 'THURSDAY', time: '09:00 - 19:00' },
                            { name: 'FRIDAY', time: '09:00 - 17:00' },
                            { name: 'SATURDAY', time: '-' },
                            { name: 'SUNDAY', time: '-' },
                        ].map((item, i) => (
                            <li
                                key={i}
                                className='font-medium w-full flex justify-between items-center py-4 text-slate-500 border-slate-300 border-b border-solid'>
                                <span className='w-full text-start'>
                                    {item.name}
                                </span>
                                <span className='w-full text-end'>
                                    {item.time}
                                </span>
                                <span className='w-full text-start'>{''}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
