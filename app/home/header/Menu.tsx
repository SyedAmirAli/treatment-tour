import React from 'react';
import DesktopMenu from './DesktopMenu';

export default function Menu() {
    return (
        <div className='absolute 2xl:relative top-20 left-0 2xl:top-0 w-full 2xl:w-auto'>
            <DesktopMenu />
        </div>
    );
}
