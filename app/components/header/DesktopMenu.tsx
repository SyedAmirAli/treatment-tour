'use client';
import assets from '@/assets';
import info from '@/assets/info';
import {
    useGetCategoriesQuery,
    useGetLocationsQuery,
} from '@/redux/api/apiSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DesktopMenu() {
    const { isError, error, isLoading, data } =
        useGetCategoriesQuery(undefined);

    const {
        isError: locationIsError,
        isLoading: locationIsLoading,
        error: locationError,
        data: locations,
    } = useGetLocationsQuery(undefined);

    info(
        'useGetCategoriesQuery',
        { isError, error, isLoading, data },
        'ignore'
    );
    info(
        'useGetLocationsQuery',
        { locations, locationIsError, locationIsLoading, locationError },
        'ignore'
    );

    const [menuActive, setMenuActive] = useState(-1);
    const pathname = usePathname();

    useEffect(
        function () {
            if (pathname === '/contact') {
                setMenuActive(0);
            } else setMenuActive(-1);

            if (pathname.startsWith('/country')) {
                setMenuActive(1);
            }

            if (pathname.startsWith('/treatment')) {
                setMenuActive(2);
            }
            if (pathname.startsWith('/report')) {
                setMenuActive(3);
            }
        },
        [pathname]
    );

    return (
        <ul className='flex lg:gap-8 2xl:gap-12 flex-col relative lg:flex-row bg-white border border-solid border-slate-300 lg:border-none rounded-lg lg:bg-transparent p-4 gap-0'>
            {[
                {
                    url: '/contact',
                    title: 'Contacts',
                    icon: assets.svg.cardClip,
                    subcategories: [],
                    prefix: 'contact',
                },
                {
                    url: '#',
                    title: 'Locations',
                    icon: assets.svg.locationCrosshair,
                    subcategories: locations,
                    prefix: 'country',
                },
                {
                    url: '#',
                    title: 'Treatments',
                    icon: assets.svg.gem,
                    subcategories: data,
                    prefix: 'treatment',
                },
                {
                    url: '#',
                    title: 'More',
                    icon: assets.svg.downLeftAndUpRight,
                    subcategories: [
                        { name: 'Contact', url: '/contact' },
                        { name: 'Report Us', url: '/report' },
                    ],
                    prefix: 'more',
                },
            ].map((item, i) => (
                <li
                    key={i}
                    className={
                        'group lg:w-32 lg:py-4 py-1 flex flex-col lg:flex-row lg:items-center lg:justify-center relative group ' +
                        (i === menuActive ? 'active' : '') +
                        (i === 0 ? ' hidden' : '')
                    }>
                    <button
                        onClick={() => {
                            if (i !== 0) {
                                if (menuActive === i) {
                                    setMenuActive(-1);
                                } else setMenuActive(i);
                            }
                        }}
                        className='text-md flex gap-1 items-center lg:justify-center justify-between font-semibold bg-slate-100 px-4 rounded-md w-full lg:w-auto lg:rounded-full py-3 text-slate-600 fill-slate-600 h-[44px] duration-300 group-hover:bg-primary group-hover:text-slate-100 group-[.active]:bg-primary group-[.active]:text-slate-100'>
                        <Link
                            href={item.url}
                            className='flex gap-1 items-center justify-center'>
                            <i className='block group-hover:pr-2 group-[.active]:pr-2 duration-500 size-7 pr-2 lg:pr-0 fill-primary lg:size-0 lg:group-hover:size-7 group-[.active]:w-7 group-[.active]:h-7 group-[.active]:fill-slate-100 group-hover:fill-slate-100'>
                                {item.icon}
                            </i>
                            <span className='leading-3'>{item.title}</span>
                        </Link>
                        {![0].includes(i) && (
                            <i className='block h-3 w-3 duration-500 group-hover:fill-slate-100 group-hover:rotate-90 group-[.active]:fill-slate-100 group-[.active]:rotate-90'>
                                {assets.svg.chevronRight}
                            </i>
                        )}
                    </button>

                    {item?.subcategories?.length > 0 && (
                        <ChildrenMenu
                            menu={item.subcategories}
                            prefix={item.prefix}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

interface ChildrenMenuItemType {
    id: number;
    name: string;
    url?: string;
    subcategories?: ChildrenMenuItemType[];
    prefix: string;
}

interface ChildrenMenuProps {
    menu: ChildrenMenuItemType[];
    prefix: string;
    suffix?: string;
}

function ChildrenMenu({ menu, prefix, suffix }: ChildrenMenuProps) {
    return (
        <ul className='lg:absolute top-[72px] left-0 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] group-[.active]:py-4 lg:group-hover:py-4'>
            {menu.map((cItem, i) => (
                <ChildrenMenuItem
                    menuItem={cItem}
                    key={i}
                    prefix={prefix}
                    suffix={suffix}
                />
            ))}
        </ul>
    );
}

function ChildrenMenuItem({
    menuItem,
    prefix,
    suffix = '',
}: {
    menuItem: ChildrenMenuItemType;
    prefix: string;
    suffix?: string;
}) {
    const { id, url, name, subcategories } = menuItem;
    const fullUrl = url || `/${prefix}${suffix ? suffix : ''}/${id}`;

    return (
        <li className='px-4 py-1 lg:w-56 hidden lg:group-hover:!block group-[.active]:block lg:group-[.active]:hidden group children relative'>
            <Link
                href={fullUrl || '#'}
                className='flex gap-2 py-4 rounded-lg px-3 font-medium text-lg capitalize w-full justify-between items-center bg-slate-50 text-slate-500 border border-solid border-slate-100 hover:bg-slate-100 hover:text-primary hover:fill-primary hover:tracking-wide duration-500'>
                <span className='leading-3 text-nowrap'>{name}</span>
                {subcategories && subcategories.length > 0 && (
                    <i className='block size-3 duration-500 group-[.children:hover]:rotate-90'>
                        {assets.svg.chevronRight}
                    </i>
                )}
            </Link>

            {Array.isArray(subcategories) && subcategories.length > 0 && (
                <div className='hidden group-[.children:hover]:block lg:absolute left-56 -top-16'>
                    <ChildrenMenu
                        menu={subcategories}
                        prefix={prefix}
                        suffix={suffix === '' ? '/state' : suffix}
                    />
                </div>
            )}
        </li>
    );
}
