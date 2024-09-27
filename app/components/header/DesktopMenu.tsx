'use client';
import assets from '@/assets';
import Link from 'next/link';
import React, { useState } from 'react';

export default function DesktopMenu() {
    const children = [
        {
            children: [
                { title: 'New Locations' },
                { title: 'Locations Colombia' },
                { title: 'Locations Costa Rica' },
                { title: 'Locations Indonesia' },
            ],
            title: 'Locations',
        },
        {
            children: [
                { title: 'Colombia Locations' },
                { title: 'New Colombia' },
                { title: 'Colombia Costa Rica' },
                { title: 'Colombia Indonesia' },
            ],
            title: 'Colombia',
        },
        { children: [], title: 'Costa Rica' },
        { children: [], title: 'Indonesia' },
        {
            children: [
                { title: 'Colombia Locations' },
                { title: 'Mexico Colombia' },
                { title: 'Mexico Costa Rica' },
                { title: 'Mexico Indonesia' },
            ],
            title: 'Mexico',
        },
        { children: [], title: 'Singapore' },
        { children: [], title: 'South Korea' },
        { children: [], title: 'Thailand' },
        {
            children: [
                { title: 'Colombia Locations' },
                { title: 'Turkey Colombia' },
                { title: 'Turkey Costa Rica' },
                { title: 'Turkey Indonesia' },
            ],
            title: 'Turkey',
        },
        {
            children: [
                { title: 'New More Locations' },
                { title: 'More Colombia' },
                { title: 'More Costa Rica' },
                { title: 'More Indonesia' },
            ],
            title: 'More Locations',
        },
    ];

    const [menuActive, setMenuActive] = useState(-1);

    return (
        <ul className='flex 2xl:gap-12 flex-col relative 2xl:flex-row bg-white border border-solid border-slate-300 2xl:border-none rounded-lg 2xl:bg-transparent p-4 gap-0'>
            {[
                {
                    url: '/contact',
                    title: 'Contacts',
                    icon: assets.svg.cardClip,
                    children,
                },
                {
                    url: '#',
                    title: 'Locations',
                    icon: assets.svg.locationCrosshair,
                    children,
                },
                {
                    url: '#',
                    title: 'Treatments',
                    icon: assets.svg.gem,
                    children,
                },
                {
                    url: '#',
                    title: 'More',
                    icon: assets.svg.downLeftAndUpRight,
                    children,
                },
            ].map((item, i) => (
                <li
                    key={i}
                    className={
                        'group 2xl:w-32 2xl:py-4 py-1 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-center relative group ' +
                        (i === menuActive ? 'active' : '')
                    }>
                    <button
                        onClick={() => {
                            if (menuActive === i) {
                                setMenuActive(-1);
                            } else setMenuActive(i);
                        }}
                        className='text-md flex gap-1 items-center 2xl:justify-center justify-between font-semibold bg-slate-100 px-4 rounded-md w-full 2xl:w-auto 2xl:rounded-full py-3 text-slate-600 fill-slate-600 h-[44px] duration-300 group-hover:bg-primary group-hover:text-slate-100 group-[.active]:bg-primary group-[.active]:text-slate-100'>
                        <Link
                            href={item.url}
                            className='flex gap-1 items-center justify-center'>
                            <i className='block group-hover:pr-2 group-[.active]:pr-2 duration-500 size-7 pr-2 2xl:pr-0 fill-primary 2xl:size-0 2xl:group-hover:size-7 group-[.active]:w-7 group-[.active]:h-7 group-[.active]:fill-slate-100 group-hover:fill-slate-100'>
                                {item.icon}
                            </i>
                            <span className='leading-3'>{item.title}</span>
                        </Link>
                        <i className='block h-3 w-3 duration-500 group-hover:fill-slate-100 group-hover:rotate-90 group-[.active]:fill-slate-100 group-[.active]:rotate-90'>
                            {assets.svg.chevronRight}
                        </i>
                    </button>

                    {item.children.length > 0 && (
                        <ChildrenMenu menu={item.children} />
                    )}
                </li>
            ))}
        </ul>
    );
}

interface ChildrenMenuItemType {
    title: string;
    children?: ChildrenMenuItemType[];
}

interface ChildrenMenuProps {
    menu: ChildrenMenuItemType[];
}
function ChildrenMenu({ menu }: ChildrenMenuProps) {
    return (
        <ul className='2xl:absolute top-[72px] left-0 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] group-[.active]:py-4 group-hover:py-4'>
            {menu.map((cItem, i) => (
                <ChildrenMenuItem menuItem={cItem} key={i} />
            ))}
        </ul>
    );
}

function ChildrenMenuItem({ menuItem }: { menuItem: ChildrenMenuItemType }) {
    const { title, children } = menuItem;

    return (
        <li className='px-4 py-1 2xl:w-56 hidden 2xl:group-hover:!block group-[.active]:block 2xl:group-[.active]:hidden group children relative'>
            <a
                href='#'
                className='flex gap-2 py-4 rounded-lg px-3 font-medium text-lg capitalize w-full justify-between items-center bg-slate-50 text-slate-500 border border-solid border-slate-100 hover:bg-slate-100 hover:text-primary hover:fill-primary hover:tracking-wide duration-500'>
                <span className='leading-3 text-nowrap'>{title}</span>
                {children && children.length > 0 && (
                    <i className='block size-3 duration-500 group-[.children:hover]:rotate-90'>
                        {assets.svg.chevronRight}
                    </i>
                )}
            </a>

            {Array.isArray(children) && (
                <div className='hidden group-[.children:hover]:block 2xl:absolute left-56 -top-16'>
                    <ChildrenMenu menu={children} />
                </div>
            )}
        </li>
    );
}
