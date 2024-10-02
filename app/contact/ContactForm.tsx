'use client';
import {
    useGetCategoriesQuery,
    useSaveContactMutation,
} from '@/redux/api/apiSlice';
import React, { useEffect, useState } from 'react';
import Loading from '../components/commons/Loading';
import info from '@/assets/info';

export default function ContactForm() {
    const [form, setForm] = useState<{
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        present_address: string;
        services: string[];
        message: string;
    }>({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        present_address: '',
        services: [],
        message: '',
    });

    const { isLoading, data, error } = useGetCategoriesQuery(undefined);
    const [
        saveContact,
        {
            isLoading: contactIsLoading,
            data: contactData,
            error: contactIsError,
            isSuccess,
        },
    ] = useSaveContactMutation(undefined);

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function formHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        saveContact(form);
        info(form);
    }

    useEffect(
        function () {
            if (isSuccess) {
                alert('Your contact information added successfully!');
                setForm({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    present_address: '',
                    services: [],
                    message: '',
                });
            }

            if (contactIsError) {
                alert('Failed to add contact information!');
            }
        },
        [contactIsError, isSuccess]
    );

    info('useGetCategoriesQuery', { data, error });
    info('useSaveContactMutation', {
        contactIsLoading,
        contactData,
        contactIsError,
    });

    return (
        <form
            onSubmit={formHandler}
            className='w-full bg-white mb-0 mt-10 lg:my-10 p-8 rounded-3xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
            {(isLoading || contactIsLoading) && <Loading />}
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
                        onChange={inputHandler}
                        value={form.first_name}
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
                        value={form.last_name}
                        onChange={inputHandler}
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
                    value={form.email}
                    onChange={inputHandler}
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
                    name='phone_number'
                    id='phone_number'
                    value={form.phone_number}
                    onChange={inputHandler}
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
                    name='present_address'
                    id='present_address'
                    value={form.present_address}
                    onChange={inputHandler}
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
                    value={form.message}
                    onChange={function (event) {
                        setForm({ ...form, message: event.target.value });
                    }}
                    placeholder="Write here what's on your mind say..."
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'></textarea>
            </div>

            <div className='w-full mt-8'>
                <h4 className='font-bold font-suse'>Services</h4>
                <div className='flex flex-wrap items-center justify-between gap-y-3 p-4'>
                    {Array.isArray(data) &&
                        data.map((category: { id: number; name: string }) => (
                            <label
                                key={category.id}
                                className='flex gap-2 text-sm font-comfortaa font-bold w-1/2'>
                                <input
                                    onChange={function () {
                                        if (
                                            form.services.includes(
                                                category.name
                                            )
                                        ) {
                                            setForm({
                                                ...form,
                                                services: form.services.filter(
                                                    (service: string) =>
                                                        service !==
                                                        category.name
                                                ),
                                            });
                                        } else {
                                            setForm({
                                                ...form,
                                                services: [
                                                    ...form.services,
                                                    category.name,
                                                ],
                                            });
                                        }
                                    }}
                                    type='checkbox'
                                    className='w-4 focus:outline-primary-main bg-primary-main border border-solid border-slate-300 cursor-pointer'
                                />
                                <span>{category.name}</span>
                            </label>
                        ))}
                </div>
            </div>

            <div className='w-full mt-2'>
                <button
                    type='submit'
                    className='w-full py-2 bg-slate-900 duration-500 hover:tracking-wide hover:bg-black text-white rounded-md pb-2.5 font-bold font-comfortaa'>
                    Send Message
                </button>
            </div>
        </form>
    );
}
