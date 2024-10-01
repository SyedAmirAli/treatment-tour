'use client';
import React, { useState } from 'react';

export default function ProcedureItem({
    procedure,
}: {
    procedure: { id: number; title: string; items: never[] };
}) {
    const { title } = procedure;
    const [isActive, setIsActive] = useState(false);

    return (
        <li className='w-full'>
            <button
                className='w-full flex items-center justify-between py-4 border-b border-solid border-slate-300 mb-6'
                onClick={() => setIsActive(!isActive)}>
                <span className='px-2 text-lg font-medium'>{title}</span>
                <span
                    className={`${isActive ? 'rotate-180' : ''} duration-500`}>
                    <i className='fa-solid fa-angle-down mr-4'></i>
                </span>
            </button>

            {isActive && (
                <table className='table_1 table-fixed w-[97%] mt-4 border-collapse my-6 bg-white'>
                    <thead className='text-center bg-gray-100 '>
                        <tr>
                            <th className='border p-2'>PROCEDURE</th>
                            <th className='border p-2'>PRICE</th>
                            <th className='border p-2'>DURATION</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className='text-normal font-normal'>
                            <td className='border p-2'>Labiaplasty</td>
                            <td className='border p-2'>USD 722</td>
                            <td className='border p-2'>7 days</td>
                        </tr>
                        <tr className='text-normal font-normal'>
                            <td className='border p-2'>Vaginoplasty</td>
                            <td className='border p-2'>USD 1444</td>
                            <td className='border p-2'>7 days</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </li>
    );
}
