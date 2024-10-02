'use client';
import info from '@/assets/info';
import { useSaveReportMutation } from '@/redux/api/apiSlice';
import React, { useEffect, useState } from 'react';
import Loading from '../components/commons/Loading';

export default function ReportForm() {
    const [form, setForm] = useState<{
        title: string;
        description: string;
    }>({
        title: '',
        description: '',
    });

    const [
        saveReport,
        {
            isLoading: reportIsLoading,
            data: reportData,
            error: reportIsError,
            isSuccess,
        },
    ] = useSaveReportMutation(undefined);

    function formHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        saveReport(form);
        info(form);
    }

    useEffect(
        function () {
            if (isSuccess) {
                alert('Your report information added successfully!');
                setForm({ title: '', description: '' });
            }

            if (reportIsError) {
                alert('Failed to add report information!');
            }
        },
        [reportIsError, isSuccess]
    );

    info('useSaveReportMutation', {
        reportIsLoading,
        reportData,
        reportIsError,
    });

    return (
        <form
            onSubmit={formHandler}
            className='w-full bg-white mb-0 mt-10 lg:my-10 p-8 rounded-3xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col w-full gap-0.5'>
                {reportIsLoading && <Loading />}

                <label htmlFor='title' className='font-bold font-comfortaa'>
                    Title
                </label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={form.title}
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                    placeholder='e.g. Jhon'
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                />
            </div>

            <div className='flex flex-col w-full gap-0.5 mt-4'>
                <label
                    htmlFor='description'
                    className='font-bold font-comfortaa'>
                    Message
                </label>
                <textarea
                    rows={4}
                    name='description'
                    id='description'
                    value={form.description}
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                    placeholder="Write here what's on your mind say..."
                    className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'></textarea>
            </div>

            <div className='w-full mt-8'>
                <h4 className='font-bold font-suse'>Report About</h4>
                <div className='flex flex-wrap items-center justify-between gap-y-3 p-4'>
                    {[
                        'Violence',
                        'Misuse',
                        'Unless Warning',
                        'Sexual Abuse',
                        'Harassment',
                        'Political Issue',
                        'Un Importunacy',
                        'Non Procedural',
                    ].map((item, index) => (
                        <label
                            key={index}
                            className='flex gap-2 text-sm font-comfortaa font-bold w-1/2 lg:w-1/3 xl:w-1/4'>
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
                    Report Us
                </button>
            </div>
        </form>
    );
}
