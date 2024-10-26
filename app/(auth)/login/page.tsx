"use client";
import assets from "@/assets";
import info from "@/assets/info";
import Link from "next/link";
import React, { useState } from "react";

const Root: React.FC = () => {
    const [form, setForm] = useState<{
        email: string;
        password: string;
        confirmPassword: string;
        remembered: boolean;
    }>({ email: "", password: "", confirmPassword: "", remembered: false });

    return (
        <div className="w-full flex items-center justify-center min-h-screen">
            <div className="container">
                <div className="bg-white w-full p-10 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] rounded-3xl flex">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold">
                            <span className="text-primary">Treatment</span>
                            Tour
                        </h2>

                        <form action="" className="pt-10 w-full">
                            <h1 className="text-4xl font-bold text-primary text-center">
                                Sign in to Account
                            </h1>
                            <div className="flex items-center justify-center w-full">
                                <p className="w-20 rounded-full h-1 bg-primary mt-3 mb-6"></p>
                            </div>

                            <div className="w-full flex flex-col items-center justify-center">
                                <div className="w-full max-w-xs flex flex-col gap-3">
                                    <Link
                                        href="/login"
                                        className="flex w-full p-2 border-2 border-solid border-slate-200 items-center gap-2.5 rounded-md duration-500 hover:tracking-wide hover:bg-slate-100"
                                    >
                                        <i className="size-8">
                                            {assets.svg.google}
                                        </i>
                                        <span className="font-medium text-lg text-primary">
                                            Continue with Google
                                        </span>
                                    </Link>
                                    {/* <Link
                                        href="/login"
                                        className="flex w-full p-2 border-2 border-solid border-slate-200 items-center gap-2.5 rounded-md duration-500 hover:tracking-wide hover:bg-slate-100"
                                    >
                                        <i className="size-8">
                                            {assets.svg.facebook}
                                        </i>
                                        <span className="font-medium text-lg text-primary">
                                            Continue with Facebook
                                        </span>
                                    </Link> */}
                                </div>

                                <p className="leading-5 py-5">
                                    Or use
                                    <span className="text-primary px-1 font-bold">
                                        treatment tour
                                    </span>
                                    account to login.
                                </p>
                            </div>

                            <div className="w-full mt-5 flex gap-4 flex-col items-center justify-center">
                                <p className="max-w-lg text-justify">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatum ea eligendi
                                    quia tempora expedita ipsa voluptas
                                    consectetur rerum nisi aspernatur, beatae
                                    possimus, quo nihil optio exercitationem
                                    architecto delectus accusantium consequatur!
                                </p>
                                <Input
                                    value={form.email}
                                    type="email"
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            email: event.target.value,
                                        });
                                    }}
                                    placeholder="e.g. example@gmail.com"
                                    icon={
                                        <i className="fa-solid fa-envelope"></i>
                                    }
                                />
                                <Input
                                    value={form.password}
                                    type="password"
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            password: event.target.value,
                                        });
                                    }}
                                    placeholder="*x&*0******"
                                    icon={<i className="fa-solid fa-key"></i>}
                                />

                                <div className="w-full max-w-lg">
                                    <button className="w-full py-3 bg-primary rounded-lg text-white text-lg font-bold">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/4"></div>
                </div>
            </div>
        </div>
    );
};

export default Root;

const Input: React.FC<{
    type?: string;
    value: string;
    icon: JSX.Element;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange, type = "text", placeholder = "Write here", value, icon }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    info(isFocused);

    switch (type) {
        default:
            return (
                <div
                    className={`w-full max-w-lg relative bg-slate-50 rounded-md border pl-14 border-solid shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] ${
                        isFocused ? "border-primary" : " border-slate-300"
                    }`}
                >
                    <label
                        htmlFor="email"
                        className={`absolute  text-2xl left-4 top-3
                            ${isFocused ? "text-primary" : "text-slate-400"}`}
                    >
                        {icon}
                    </label>
                    <input
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        type={type}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        className={`w-full bg-transparent text-lg outline-none pl-4 pr-4 py-3 font-roboto-mono text-slate-700 border-l border-solid  ${
                            isFocused ? "border-primary" : "border-slate-300"
                        }`}
                    />
                </div>
            );
    }
};

// function onFocusHandler(event: React.FocusEvent<HTMLInputElement>) {
//     // setIsFocused(event.target.);
// }
{
    /* <label
                        htmlFor="#"
                        className={`absolute bg-slate-50 rounded-md px-4 py-0.5 -top-4 font-medium left-4 border border-solid ${
                            isFocused
                                ? "border-primary text-primary"
                                : "border-slate-300 text-slate-400"
                        }`}
                    >
                        Your E-mail
                    </label> */
}
