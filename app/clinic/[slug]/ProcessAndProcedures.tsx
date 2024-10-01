import Link from 'next/link';
import React from 'react';
import ProcedureItem from './ProcedureItem';

export default function ProcessAndProcedures() {
    return (
        <div className='mt-8 border-b-2 pb-8'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>
                    Prices and Procedures
                </h1>
                <Link
                    href='#'
                    className='shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-solid border-slate-300 uppercase tracking-wide text-primary hover:bg-primary hover:text-white duration-500 hover:tracking-wider p-2 bg-white font-medium rounded-lg text-lg text-center mr-6 mt-4'>
                    Get Qoute
                </Link>
            </div>
            <div className=''>
                <div className='list'>
                    <ul className='list-decimal ml-5 mt-4 font-semibold'>
                        {[
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Breast',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Stomach',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Nose',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Weight Loss Surgery',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Eyes',
                                items: [],
                            },
                            {
                                id: 0,
                                title: 'Cosmetic & Plastic Surgery: Body',
                                items: [],
                            },
                        ].map((item, i) => (
                            <ProcedureItem key={i} procedure={item} />
                        ))}
                    </ul>
                </div>
                <div className='w-full mt-6'>
                    <Link
                        href='#'
                        className='w-full block shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] border border-solid border-slate-300 uppercase tracking-wide text-primary hover:bg-primary hover:text-white duration-500 hover:tracking-wider p-2 bg-white font-medium rounded-lg text-lg text-center mr-6 mt-4'>
                        Contact Clinic
                    </Link>
                </div>
            </div>
        </div>
    );
}
