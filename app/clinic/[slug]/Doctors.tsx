import info, { asset, doctorAsset } from '@/assets/info';
import { useGetDoctorQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';
import React from 'react';

export default function Doctors({ clinicId }: { clinicId: string }) {
    info('Doctors.tsx', clinicId, 'ignore');

    const { isError, isLoading, error, data } = useGetDoctorQuery(clinicId);

    info(
        'Doctors.tsx',
        'useGetDoctorQuery',
        {
            isError,
            isLoading,
            error,
            data,
        },
        'ignore'
    );

    return (
        <div className='w-full py-10 mt-5'>
            <div className='flex mb-10 border-b border-solid border-slate-300 pb-4 w-full items-center cursor-pointer justify-between'>
                <h1 className='text-3xl font-bold'>Doctors</h1>
                <i className='fa-solid fa-angle-down mr-4'></i>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full'>
                {data?.map((doctor: DoctorData) => (
                    <Doctor key={doctor?.id} data={doctor} />
                ))}
            </div>
        </div>
    );
}

interface DoctorData {
    id: number;
    clinic_id: number;
    name: string;
    image: string;
    experience_years: number;
    spoken_languages: string;
    associations: string;
    education: string;
    created_at: string;
    updated_at: string;
}

interface DoctorProps {
    data: DoctorData;
}

function Doctor({ data }: DoctorProps) {
    info(asset(data.image), 'ignore');

    return (
        <div className='w-full bg-white py-4 pl-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] rounded-3xl '>
            <div className='max-h-[600px] overflow-y-scroll overflow-x-hidden rounded-xl has-scrollbar'>
                <div className='flex gap-2 items-start justify-between'>
                    <figure>
                        <Image
                            width={200}
                            height={200}
                            alt={data.name}
                            src={doctorAsset(data.image)}
                            className='rounded-full !min-w-40 !min-h-40 !h-40 !w-40'
                        />
                    </figure>
                    <div className='w-full'>
                        <h3 className='text-xl font-bold py-4'>{data.name}</h3>
                        <p className='px-2'>
                            <strong className='pr-2'>
                                {data.experience_years}
                            </strong>
                            <span>Years Of Experience</span>
                        </p>
                    </div>
                </div>

                <div className='py-5'>
                    <div className='border-t border-solid border-slate-300 pt-3'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-language'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Language Spoken
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1'>
                            {data.spoken_languages.split(',').map((lang, i) => (
                                <p
                                    key={i}
                                    className='font-medium text-slate-600'>
                                    {lang}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='border-t border-solid border-slate-300 pt-1 my-2'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-parachute-box'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Associations
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1 text-md leading-6'>
                            {data.associations}
                        </div>
                    </div>

                    <div className='border-t border-solid border-slate-300 pt-1'>
                        <p className='flex gap-3'>
                            <span className='text-xl'>
                                <i className='fa-solid fa-school'></i>
                            </span>
                            <span className='font-semibold text-lg'>
                                Educations
                            </span>
                        </p>
                        <div className='px-4 p-2 pt-1 text-pretty'>
                            {data.education}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
