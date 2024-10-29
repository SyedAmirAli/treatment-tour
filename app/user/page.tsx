'use client';
import React, { useState } from 'react';

import { useLoginMutation } from '@/redux/api/apiSlice';
import { useRouter } from 'next/navigation';

export default function UserLogin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const router = useRouter();
    const [login, { isLoading, isError }] = useLoginMutation();

    const inputHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const formHandler = async (event) => {
        event.preventDefault();
        const response = await login(form).unwrap();

        if (response.status === 200) {
            localStorage.setItem('access_token', response.access_token);
            if (response.user_type === 'doctor') {
                router.push('/doctor-dashboard'); 
            } else if (response.user_type === 'patient') {
                router.push('/patient-dashboard'); 
            }
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="flex max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
               
                <div className="w-1/2 bg-white p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign in to Account</h2>
                    <p className="text-gray-500 mb-6 text-sm">Enter your credentials to access your account</p>

                    <form onSubmit={formHandler} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={inputHandler}
                                placeholder="e.g. user@example.com"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-pink-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={inputHandler}
                                placeholder="Your password"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-pink-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300"
                        >
                            Login
                        </button>

                        <p className="text-center text-gray-600 mt-4 text-sm">
                            Don’t have an account? <a href="#" className="bg-white hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>

               
                <div className="w-1/2 bg-primary text-white flex flex-col justify-center items-center p-12">
                    <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
                    <p className="text-center mb-6 text-sm">Fill out your information and start your journey with us today.</p>
                    <button className=" w-full py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
