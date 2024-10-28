'use client';
import React, { useState } from 'react';

export default function UserLogin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    function inputHandler(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function formHandler(event) {
        event.preventDefault();
        // Here you would normally call the login function, but it's commented out for now
        // await login(form);
        console.log("Form submitted:", form); // For testing purposes
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={formHandler} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center font-bold text-2xl mb-6">User Login</h2>

                <div className="flex flex-col mb-4">
                    <label className="font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={inputHandler}
                        placeholder="e.g. user@example.com"
                        className="border px-3 py-2 rounded-md"
                        required
                    />
                </div>

                <div className="flex flex-col mb-6">
                    <label className="font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={inputHandler}
                        placeholder="Your password"
                        className="border px-3 py-2 rounded-md"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
