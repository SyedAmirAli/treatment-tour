/* eslint-disable react-hooks/exhaustive-deps */
import Loading from '@/app/components/commons/Loading';
import Toast from '@/app/components/commons/useSwalAlert';
import info from '@/assets/info';
import {
    useBookAppointmentMutation,
    useGetDoctorQuery,
} from '@/redux/api/apiSlice';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useState } from 'react';

const BookAppointModal: React.FC<{
    closeModal: () => void;
}> = ({ closeModal }) => {
    // const toaster = new Toast();
    const { slug }: { slug: string } = useParams();
    const [form, setForm] = useState<{
        name: string;
        doctor_id: number;
        clinic_id: number;
        email: string;
        phone_number: string;
        present_address: string;
        services: string[];
        message: string;
    }>({
        name: '',
        doctor_id: 0,
        clinic_id: parseInt(slug),
        email: '',
        phone_number: '',
        present_address: '',
        services: [],
        message: '',
    });

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    // function cancelHandler() {}

    const {
        isLoading,
        isError,
        error,
        data: doctors,
    } = useGetDoctorQuery(slug);

    const [
        bookAppointment,
        {
            isLoading: appointIsLoading,
            error: appointError,
            isError: appointIsError,
            data: appointData,
            isSuccess,
        },
    ] = useBookAppointmentMutation();

    info('Appointment.jsx', 'useGetDoctorQuery', {
        isLoading,
        isError,
        error,
        doctors,
        slug,
    });
    info('Appointment.jsx', 'useBookAppointmentMutation', {
        appointIsLoading,
        appointIsError,
        appointData,
        appointError,
    });

    async function formHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (form.clinic_id <= 0) {
            return Toast.warning('Clinic selection must be required!');
        }
        if (form.doctor_id <= 0) {
            return Toast.error('Doctor selection must be required!');
        }

        bookAppointment(form);
    }

    useEffect(
        function () {
            if (isSuccess) {
                const toast = Toast.modalNotifySuccess(
                    'Your clinic appointment has been successfully booked. Please keep an eye on your inbox for further updates and notifications. Thank you for choosing us!',
                    'Appointment Confirmed'
                );

                closeModal();
                info(toast);
            }

            if (appointError) {
                const toast = Toast.modalNotifyError(
                    'We encountered an issue while trying to book your appointment. Please check your details and try again, or contact support if the problem persists. We apologize for the inconvenience.',
                    'Appointment Failed!'
                );

                info(toast);
            }
        },
        [appointData, appointError, isSuccess]
    );

    if (isLoading) return <Loading />;

    return (
        <div className='fixed top-0 left-0 z-30 bg-white/10 w-full p-2'>
            <div className='h-screen overflow-y-visible overflow-x-hidden py-10 w-full flex items-center justify-center'>
                {appointIsLoading && <Loading />}

                <form
                    onSubmit={formHandler}
                    className='w-full max-w-2xl bg-white mb-0 mt-10 lg:my-10 p-8 rounded-3xl border border-solid border-slate-300 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
                    <h1 className='text-center font-bold text-3xl pb-2.5 text-primary border-b border-solid border-slate-300 mb-5'>
                        Appointment Booking Form
                    </h1>

                    <div className='w-full flex flex-col sm:flex-row justify-between gap-6'>
                        <div className='flex flex-col w-full gap-0.5'>
                            <label
                                htmlFor='name'
                                className='font-bold font-comfortaa'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                onChange={inputHandler}
                                value={form.name}
                                placeholder='e.g. Jhon'
                                className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-0.5'>
                            <label
                                htmlFor='last_name'
                                className='font-bold font-comfortaa'>
                                Select A Doctor
                            </label>

                            <select
                                name='doctor_id'
                                id='doctor_id'
                                required
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        doctor_id: parseInt(e.target.value),
                                    })
                                }
                                className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'>
                                <option hidden value={0}>
                                    Select Doctor
                                </option>
                                {Array.isArray(doctors) &&
                                doctors.length > 0 ? (
                                    doctors.map((doctor) => (
                                        <option
                                            className='py-2'
                                            key={doctor.id}
                                            value={doctor.id}>
                                            {doctor.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value={0}>No Doctor Found</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-0.5 mt-4'>
                        <label
                            htmlFor='email'
                            className='font-bold font-comfortaa'>
                            E-mail
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            value={form.email}
                            onChange={inputHandler}
                            placeholder='e.g. example@gmail.com'
                            className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                        />
                    </div>
                    <div className='flex flex-col w-full gap-0.5 mt-4'>
                        <label
                            htmlFor='phone'
                            className='font-bold font-comfortaa'>
                            Phone Number
                        </label>
                        <input
                            type='text'
                            name='phone_number'
                            id='phone_number'
                            value={form.phone_number}
                            onChange={inputHandler}
                            placeholder='e.g. +880 18-17807594'
                            className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                        />
                    </div>
                    <div className='flex flex-col w-full gap-0.5 mt-4'>
                        <label
                            htmlFor='address'
                            className='font-bold font-comfortaa'>
                            Present Address
                        </label>
                        <input
                            type='text'
                            name='present_address'
                            id='present_address'
                            value={form.present_address}
                            onChange={inputHandler}
                            placeholder='e.g. 10/12 Texus, USA'
                            className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'
                        />
                    </div>
                    <div className='flex flex-col w-full gap-0.5 mt-4'>
                        <label
                            htmlFor='message'
                            className='font-bold font-comfortaa'>
                            Message
                        </label>
                        <textarea
                            rows={4}
                            name='message'
                            id='message'
                            value={form.message}
                            onChange={function (event) {
                                setForm({
                                    ...form,
                                    message: event.target.value,
                                });
                            }}
                            placeholder="Write here what's on your mind say..."
                            className='border border-solid font-comfortaa px-3 py-2 border-slate-300 rounded-md focus:outline-primary-main text-slate-900'></textarea>
                    </div>

                    <div className='w-full mt-6 flex gap-3'>
                        <button
                            type='submit'
                            className='w-full py-2 bg-slate-900 duration-500 hover:tracking-wide hover:bg-primary text-white rounded-md pb-2.5 font-bold font-comfortaa'>
                            Book Now
                        </button>
                        <button
                            type='button'
                            onClick={closeModal}
                            className='px-6 py-2 bg-red-500 duration-500 hover:tracking-wide hover:bg-red-700 text-white rounded-md pb-2.5 font-bold font-comfortaa'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookAppointModal;
