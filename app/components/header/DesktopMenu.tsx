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
        <ul className="flex lg:gap-8 2xl:gap-12 flex-col relative lg:flex-row bg-white border border-solid border-slate-300 lg:border-none rounded-lg lg:bg-transparent p-4 gap-0">
            {menuItems.map((item, i) => (
                // Hide "Location" menu item
                item.name.toLowerCase() !== "location" && (
                    <li
                        key={i}
                        className={
                            "group lg:w-32 lg:py-4 py-1 flex flex-col lg:flex-row lg:items-center lg:justify-center relative group " +
                            (i === menuActive ? "active" : "") +
                            (i === 0 ? " hidden" : "")
                        }
                    >
                        <button
                            onClick={() => {
                                if (i !== 0) {
                                    setMenuActive(menuActive === i ? -1 : i);
                                }
                            }}
                            className="text-md flex gap-1 items-center lg:justify-center justify-between font-semibold bg-slate-100 px-4 rounded-md w-full lg:w-auto lg:rounded-full py-3 text-slate-600 fill-slate-600 h-[44px] duration-300 group-hover:bg-primary group-hover:text-slate-100 group-[.active]:bg-primary group-[.active]:text-slate-100"
                        >
                            <Link
                                href={item.url}
                                className="flex gap-1 items-center justify-center"
                            >
                                {/* Removed Icon Rendering */}
                                <span className="leading-3">{item.name}</span>
                            </Link>
                        </button>

                        {item.children && item.children.length > 0 && (
                            <ChildrenMenu menu={item.children} prefix={item.slug} />
                        )}
                    </li>
                )
            ))}
        </ul>
    );
}

function ChildrenMenu({ menu, prefix }) {
    return (
        <ul className="lg:absolute top-[72px] left-0 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] group-[.active]:py-4 lg:group-hover:py-4">
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
                <div className="hidden group-[.children:hover]:block lg:absolute left-56 -top-16">
                    <ChildrenMenu menu={menuItem.children} prefix={prefix} />
                </div>
            )}
        </li>
    );
}
