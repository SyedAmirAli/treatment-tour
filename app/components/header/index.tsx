import React from 'react';
import HeaderMain from './HeaderMain';

export default function WithHeader({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full min-h-screen bg-white bg-gradient-to-tr from-blue-300/10 to-purple-300/10 via-pink-300/10'>
            <HeaderMain />
            <div className='w-full flex flex-col items-center justify-start pt-20'>
                {children}
            </div>
        </div>
    );
}
