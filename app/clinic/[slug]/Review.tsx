import Link from 'next/link';
import React from 'react';

export default function Review() {
    return (
        <div className='flex flex-col border-b-2 pb-10'>
            <div className='flex justify-between mt-6 w-full'>
                <div className='flex flex-col w-1/2'>
                    <div className='flex mt-5 mb-6'>
                        <i className='fa-solid fa-star'>
                            <span className='ml-1 font-sans font-medium text-lg'>
                                5.00
                            </span>
                        </i>
                        <li className='ml-2'>
                            <span className='font-medium text-lg -ml-3'>
                                4 reviews
                            </span>
                        </li>
                    </div>
                    <div className='flex'>
                        <table className='table-fixed w-full mt-10 mb-10'>
                            <tbody>
                                <tr>
                                    <td className='p-4 font-medium'>
                                        Cleanliness
                                    </td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Value</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Service</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                    <div className='flex mr-20'>
                        <Link
                            href='#'
                            className='border bg-white border-gray-400 hover:text-primary hover:tracking-wide duration-500 text-gray-700 text-center text-md font-bold mt-4 p-3 w-full rounded-md hover:bg-gray-50'>
                            Write a review
                        </Link>
                    </div>
                    <div className='flex'>
                        <table className='table-fixed w-full mt-10 mb-10'>
                            <tbody>
                                <tr>
                                    <td className='p-4 font-medium'>
                                        Cleanliness
                                    </td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Value</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                                <tr>
                                    <td className='p-4 font-medium'>Service</td>
                                    <td className='p-4 font-medium'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </td>
                                    <td className='p-4 font-medium'>5.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <a
                    href='#'
                    className='border border-gray-700 text-gray-700 text-center text-md font-bold mt-4 p-3 rounded-md hover:bg-gray-50'>
                    Show More Reviews
                </a>
            </div>
        </div>
    );
}
