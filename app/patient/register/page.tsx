'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterPatientMutation } from '@/redux/api/apiSlice';
import Loading from '../../components/commons/Loading';


export default function PatientRegistrationForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        date_of_birth: '',
        gender: 'Male',
        age: '',
        primary_contact: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        emergency_contact_name: '',
        emergency_contact_relationship: 'Spouse',
     marital_status: 'Unmarried',
        emergency_contact_number: '',
        medical_conditions: '',
        surgeries: '',
        medications: '',
        allergies: '',
        current_health_issues: '',
        duration_of_issue: '',
        pain_description: '',
        additional_symptoms: '',
        occupation: '',
        report: null,
    });
     const router = useRouter();

    const [registerPatient, { isLoading, isError, isSuccess }] = useRegisterPatientMutation();

    function inputHandler(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function fileHandler(event) {
        setForm({ ...form, report: event.target.files[0] });
    }

    async function formHandler(event) {
        event.preventDefault();
        const formPayload = new FormData();
        Object.keys(form).forEach((key) => {
            formPayload.append(key, form[key]);
        });
        await registerPatient(formPayload);

        if (isSuccess) {
            alert("Patient registered successfully!");
             router.push('/user'); 
        }
    }

    return (
 <div className="flex justify-center mt-0 mb-5">
    <form
        onSubmit={formHandler}
        className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        
        {isLoading && <Loading />}

        <h2 className="text-center font-bold text-lg mb-6">Patient Registration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information Fields */}
            <div className="flex flex-col">
                <label className="font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={inputHandler}
                    placeholder="e.g. John Doe"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={inputHandler}
                    placeholder="e.g. example@gmail.com"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Confirm Password</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={form.password_confirmation}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Date of Birth</label>
                <input
                    type="date"
                    name="date_of_birth"
                    value={form.date_of_birth}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Gender</label>
                <select
                    name="gender"
                    value={form.gender}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Age</label>
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={inputHandler}
                    placeholder="e.g. 30"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Occupation</label>
                <input
                    type="text"
                    name="occupation"
                    value={form.occupation}
                    onChange={inputHandler}
                    placeholder="e.g. Engineer"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Primary Contact</label>
                <input
                    type="text"
                    name="primary_contact"
                    value={form.primary_contact}
                    onChange={inputHandler}
                    placeholder="e.g. +123456789"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Address</label>
                <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={inputHandler}
                    placeholder="e.g. 123 Street, City"
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">City</label>
                <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">State</label>
                <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Postal Code</label>
                <input
                    type="text"
                    name="postal_code"
                    value={form.postal_code}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            {/* Emergency Contact Fields */}
            <div className="flex flex-col">
                <label className="font-semibold">Emergency Contact Name</label>
                <input
                    type="text"
                    name="emergency_contact_name"
                    value={form.emergency_contact_name}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Emergency Contact Relationship</label>
                <select
                    name="emergency_contact_relationship"
                    value={form.emergency_contact_relationship}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md">
                    <option value="Spouse">Spouse</option>
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Marital Status</label>
                <select
                    name="marital_status"
                    value={form.marital_status}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md">
                    <option value="Unmarried">Unmarried</option>  {/* Default value in DB */}
                    <option value="Married">Married</option>
                </select>
            </div>


            <div className="flex flex-col">
                <label className="font-semibold">Emergency Contact Number</label>
                <input
                    type="text"
                    name="emergency_contact_number"
                    value={form.emergency_contact_number}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            {/* Medical Fields */}
            <div className="flex flex-col">
                <label className="font-semibold">Medical Conditions</label>
                <textarea
                    name="medical_conditions"
                    value={form.medical_conditions}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Surgeries</label>
                <textarea
                    name="surgeries"
                    value={form.surgeries}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Medications</label>
                <textarea
                    name="medications"
                    value={form.medications}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Allergies</label>
                <textarea
                    name="allergies"
                    value={form.allergies}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Current Health Issues</label>
                <textarea
                    name="current_health_issues"
                    value={form.current_health_issues}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Duration of Issue</label>
                <input
                    type="text"
                    name="duration_of_issue"
                    value={form.duration_of_issue}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Pain Description</label>
                <textarea
                    name="pain_description"
                    value={form.pain_description}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Additional Symptoms</label>
                <textarea
                    name="additional_symptoms"
                    value={form.additional_symptoms}
                    onChange={inputHandler}
                    className="border px-3 py-1 rounded-md"></textarea>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold">Report</label>
                <input
                    type="file"
                    name="report"
                    onChange={fileHandler}
                    className="border px-3 py-1 rounded-md"
                />
            </div>
        </div>
        
        <button
            type="submit"
              className='w-full py-2  mt-6 bg-slate-900 duration-500 hover:tracking-wide hover:bg-black text-white rounded-md pb-2.5 font-bold font-comfortaa'>
            Register
        </button>
    </form>
</div>


    );
}
