import React from 'react';
import FooterItem from './FooterItem';
import FooterTitle from './FooterTitle';

export default function Footer() {
    return (
        <footer className='w-full flex items-center justify-center flex-col gap-4 border-t border-solid border-slate-300'>
            <FooterTitle />
            <FooterItem />
        </footer>
    );
}
