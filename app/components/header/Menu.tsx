import React from 'react';
import DesktopMenu from './DesktopMenu';

export default function Menu() {
    return (
        <div className='absolute lg:relative top-20 left-0 lg:top-0 w-full lg:w-auto'>
            <DesktopMenu />
        </div>
    );
}
