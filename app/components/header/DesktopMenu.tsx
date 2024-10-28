"use client";
import assets from "@/assets";
import info from "@/assets/info";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DesktopMenu() {
    const [menuActive, setMenuActive] = useState(-1);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      
        fetch("http://127.0.0.1:8000/api/v1/menus/main-menu")
            .then((response) => response.json())
            .then((data) => {
                // Check if data was fetched successfully
                if (data.success && data.status === 200) {
                    setMenuItems(data.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching menu data:", error);
            });
    }, []);

   return (
        <div className="w-full bg-primary py-0">
            <ul className="flex justify-center lg:gap-8 2xl:gap-12 items-center">
                {menuItems.map((item, i) => (
                    item.name.toLowerCase() !== "location" && (
                        <li
                            key={i}
                            className={`group relative ${i === menuActive ? "text-white" : "text-gray-200"}`}
                            onMouseEnter={() => setMenuActive(i)}
                            onMouseLeave={() => setMenuActive(-1)}
                        >
                            <button
                                className="px-4 py-2 rounded bg-primary"
                            >
                                <Link href={item.url} className="flex items-center justify-center">
                                    <span>{item.name}</span>
                                </Link>
                            </button>

                            {item.children && item.children.length > 0 && (
                                <ChildrenMenu menu={item.children} prefix={item.slug} />
                            )}
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}
function ChildrenMenu({ menu, prefix }) {
    return (
        <ul className="lg:absolute top-[72px] left-0 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] group-[.active]:py-4 lg:group-hover:py-4"
        >
            {menu.map((cItem) => (
                <ChildrenMenuItem menuItem={cItem} key={cItem.id} prefix={prefix} />
            ))}
        </ul>
    );
}

function ChildrenMenuItem({ menuItem, prefix }) {
    const fullUrl = menuItem.url || `/${prefix}/${menuItem.id}`;

    return (
        <li className="px-4 py-1 lg:w-56 hidden lg:group-hover:!block group-[.active]:block lg:group-[.active]:hidden group children relative">
            <Link
                href={fullUrl}
                className="flex gap-2 py-4 rounded-lg px-3 font-medium text-lg capitalize w-full justify-between items-center bg-slate-50 text-slate-500 border border-solid border-slate-100 hover:bg-slate-100 hover:text-primary hover:fill-primary hover:tracking-wide duration-500"
            >
                <span className="leading-3 text-nowrap">{menuItem.name}</span>
                {menuItem.children && menuItem.children.length > 0 && (
                    <i className="block size-3 duration-500 group-[.children:hover]:rotate-90">
                        {assets.svg.chevronRight}
                    </i>
                )}
            </Link>
            {menuItem.children && menuItem.children.length > 0 && (
                <div
                    className="hidden group-[.children:hover]:block lg:absolute"
                    style={{ left: '100%', top: '0px' }} 
                >
                    <ChildrenMenu menu={menuItem.children} prefix={prefix} />
                </div>
            )}
        </li>
    );
}
