import React from 'react';

export default function ContactForm() {
    return (
        <form
            action=''
            className='w-full bg-white mb-0 mt-10 lg:my-10 p-8 rounded-3xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
            <div className='w-full flex flex-col sm:flex-row justify-between gap-6'>
                <div className='flex flex-col w-full gap-0.5'>
                    <label
                        htmlFor='first_name'
                        className='font-bold font-comfortaa'>
                        First Name
                    </label>
                    <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        placeholder='e.g. Jhon'
                        className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                    />
                </div>
                <div className='flex flex-col w-full gap-0.5'>
                    <label
                        htmlFor='last_name'
                        className='font-bold font-comfortaa'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        name='last_name'
                        id='last_name'
                        placeholder='e.g. Doe'
                        className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                    />
                </div>
            </div>
            <div className='flex flex-col w-full gap-0.5 mt-4'>
                <label htmlFor='email' className='font-bold font-comfortaa'>
                    E-mail
                </label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='e.g. example@gmail.com'
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                />
            </div>
            <div className='flex flex-col w-full gap-0.5 mt-4'>
                <label htmlFor='phone' className='font-bold font-comfortaa'>
                    Phone Number
                </label>
                <input
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='e.g. +880 18-17807594'
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                />
            </div>
            <div className='flex flex-col w-full gap-0.5 mt-4'>
                <label htmlFor='address' className='font-bold font-comfortaa'>
                    Present Address
                </label>
                <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='e.g. 10/12 Texus, USA'
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                />
            </div>
            <div className='flex flex-col w-full gap-0.5 mt-4'>
                <label htmlFor='message' className='font-bold font-comfortaa'>
                    Message
                </label>
                <textarea
                    rows={4}
                    name='message'
                    id='message'
                    placeholder="Write here what's on your mind say..."
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'></textarea>
            </div>

            <div className='w-full mt-8'>
                <h4 className='font-bold font-suse'>Services</h4>
                <div className='flex flex-wrap items-center justify-between gap-y-3 p-4'>
                    {[
                        'Graphic Design',
                        'Web Design',
                        'Photo Printing',
                        'Software Design',
                        '3D Modeling',
                        'Live Telecast',
                        'UI/UX Design',
                    ].map((item, index) => (
                        <label
                            key={index}
                            className='flex gap-2 text-sm font-comfortaa font-bold w-1/2'>
                            <input
                                type='checkbox'
                                className='w-4 focus:outline-primary-main bg-primary-main border border-solid border-slate-300 cursor-pointer'
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='w-full mt-2'>
                <button className='w-full py-2 bg-slate-900 duration-500 hover:tracking-wide hover:bg-black text-white rounded-md pb-2.5 font-bold font-comfortaa'>
                    Send Message
                </button>
            </div>
        </form>
    );
}
