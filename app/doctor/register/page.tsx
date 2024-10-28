'use client';
import React, { useState } from 'react';
import Loading from '../../components/commons/Loading';
import { useRegisterDoctorMutation } from '@/redux/api/apiSlice';

export default function DoctorRegistrationForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        specialization: '',
        medical_license_number: '',
        certifications: '',
        clinic_name: '',
        consultation_fee: '',
        consultation_type: 'In-person',
        spoken_languages: '',
        available_countries: '',
        treatment_provided: '',
        conditions_treated: '',
        procedures_performed: '',
        available_days: '',
        available_time_slots: '',
        clinic_address: '',
        city: '',
        state: '',
        postal_code: '',
        experience_years: '',
        education: '',
        associations:'',
    });

    const [registerDoctor, { isLoading, isError, isSuccess }] = useRegisterDoctorMutation();

    function inputHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function formHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formPayload = new FormData();

        Object.keys(form).forEach((key) => {
            formPayload.append(key, form[key as keyof typeof form] as any);
        });

        await registerDoctor(formPayload);
    }

    if (isSuccess) alert("Doctor registered successfully!");
    if (isError) alert("Failed to register the doctor.");

    return (
        <form onSubmit={formHandler} className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-center font-bold text-lg mb-6">Doctor Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col">
                    <label className="font-semibold">Name</label>
                    <input type="text" name="name" value={form.name} onChange={inputHandler} placeholder="e.g. John Doe" className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Email</label>
                    <input type="email" name="email" value={form.email} onChange={inputHandler} placeholder="e.g. example@gmail.com" className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Password</label>
                    <input type="password" name="password" value={form.password} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Confirm Password</label>
                    <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Specialization</label>
                    <input type="text" name="specialization" value={form.specialization} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Medical License Number</label>
                    <input type="text" name="medical_license_number" value={form.medical_license_number} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Certifications</label>
                    <input type="text" name="certifications" value={form.certifications} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Clinic Name</label>
                    <input type="text" name="clinic_name" value={form.clinic_name} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Consultation Fee</label>
                    <input type="number" name="consultation_fee" value={form.consultation_fee} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Consultation Type</label>
                    <select name="consultation_type" value={form.consultation_type} onChange={inputHandler} className="border px-3 py-1 rounded-md" required>
                        <option value="In-person">In-person</option>
                        <option value="Online">Online</option>
                        <option value="Both">Both</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Spoken Languages</label>
                    <input type="text" name="spoken_languages" value={form.spoken_languages} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Available Countries</label>
                    <input type="text" name="available_countries" value={form.available_countries} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Treatment Provided</label>
                    <input type="text" name="treatment_provided" value={form.treatment_provided} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Conditions Treated</label>
                    <input type="text" name="conditions_treated" value={form.conditions_treated} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Procedures Performed</label>
                    <input type="text" name="procedures_performed" value={form.procedures_performed} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Available Days</label>
                    <input type="text" name="available_days" value={form.available_days} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Available Time Slots</label>
                    <input type="text" name="available_time_slots" value={form.available_time_slots} onChange={inputHandler} className="border px-3 py-1 rounded-md" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Clinic Address</label>
                    <input type="text" name="clinic_address" value={form.clinic_address} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">City</label>
                    <input type="text" name="city" value={form.city} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">State</label>
                    <input type="text" name="state" value={form.state} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Postal Code</label>
                    <input type="text" name="postal_code" value={form.postal_code} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Experience Years</label>
                    <input type="number" name="experience_years" value={form.experience_years} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Associations</label>
                    <input type="text" name="associations" value={form.associations} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Education</label>
                    <input type="number" name="education" value={form.education} onChange={inputHandler} className="border px-3 py-1 rounded-md" required />
                </div>

            </div>

            <button type="submit"
              className='w-full py-2  mt-6 bg-slate-900 duration-500 hover:tracking-wide hover:bg-black text-white rounded-md pb-2.5 font-bold font-comfortaa'>
                Register
            </button>
        </form>
    );
}
