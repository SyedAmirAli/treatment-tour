'use client';
import { useParams } from 'next/navigation';

import React from 'react';
import {
    useGetClinicsByCountriesQuery,
    useGetCountryQuery,
} from '@/redux/api/apiSlice';
import info from '@/assets/info';
import ServiceDetails from '@/app/components/commons/ServiceDetails';
import ClinicItem, { ClinicItemType } from '@/app/home/ClinicItem';

export default function Root() {
    const { slug } = useParams();

    const {
        isError: clinicIsError,
        data: clinics,
        error: clinicError,
        isLoading: clinicIsLoading,
    } = useGetClinicsByCountriesQuery(slug);
    const {
        isError: countryIsError,
        data: country,
        error: countryError,
        isLoading: countryIsLoading,
    } = useGetCountryQuery(slug);

    info(
        'country/[slug]/page.Tsx',
        'useGetClinicsByCountriesQuery',
        {
            clinicIsError,
            clinics,
            clinicError,
            clinicIsLoading,
        },
        'ignore'
    );
    info(
        'country/[slug]/page.Tsx',
        'useGetCountryQuery',
        {
            countryIsError,
            country,
            countryError,
            countryIsLoading,
        },
        'ignore'
    );

    return (
        <div className='container py-6 flex items-center justify-center flex-wrap gap-8 px-3 sm:px-0'>
            <div className='py-6 w-full'>
                <ServiceDetails
                    title={`Find clinics by showing your country  `}
                    name={country?.name}
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
// https://test.editboxpro.com/public/api/v1/countriess/1
