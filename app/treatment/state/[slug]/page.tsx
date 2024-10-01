'use client';
import { useParams } from 'next/navigation';

import React from 'react';
import {
    useGetTreatmentStateQuery,
    useGetClinicsByTreatmentStateQuery,
} from '@/redux/api/apiSlice';
import info from '@/assets/info';
import ServiceDetails from '@/app/components/commons/ServiceDetails';
import ClinicItem, { ClinicItemType } from '@/app/home/ClinicItem';

export default function Root() {
    const { slug } = useParams();

    const {
        isError: stateIsError,
        data: state,
        error: stateError,
        isLoading: stateIsLoading,
    } = useGetTreatmentStateQuery(slug);

    const {
        isError: clinicIsError,
        data: clinics,
        error: clinicError,
        isLoading: clinicIsLoading,
    } = useGetClinicsByTreatmentStateQuery(slug);

    info(
        'treatment/state/[slug]/page.Tsx',
        'useGetTreatmentStateQuery',
        {
            stateIsError,
            state,
            stateError,
            stateIsLoading,
        },
        'ignore'
    );
    info(
        'treatment/state/[slug]/page.Tsx',
        'useGetClinicsByTreatmentStateQuery',
        {
            clinicIsError,
            clinics,
            clinicError,
            clinicIsLoading,
        },
        'ignore'
    );
    return (
        <div className='container py-6 flex items-center justify-center flex-wrap gap-8 px-3 sm:px-0'>
            <div className='py-6 w-full'>
                <ServiceDetails
                    title={`Find clinics by showing your country  `}
                    name={state?.name}
                    description={state?.details}
                />
            </div>

            {clinics?.length <= 0 && (
                <div>
                    <h1 className='text-4xl text-yellow-500'>
                        No Clinics Founded Here
                    </h1>
                </div>
            )}

            {clinics?.map((clinic: ClinicItemType) => (
                <ClinicItem key={clinic.id} clinic={clinic} />
            ))}
        </div>
    );
}
