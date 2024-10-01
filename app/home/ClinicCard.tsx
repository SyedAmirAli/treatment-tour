import React from 'react';
import ServiceDetails from '../components/commons/ServiceDetails';
import { useGetClinicsQuery } from '@/redux/api/apiSlice';
import info from '@/assets/info';
import ClinicItem, { ClinicItemType } from './ClinicItem';

export default function ClinicCard() {
    const {
        isError: clinicIsError,
        data: clinics,
        error: clinicError,
        isLoading: clinicIsLoading,
    } = useGetClinicsQuery(undefined);

    info(
        'ElementCard.Tsx',
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
                    title='Our Social Services About'
                    name='Treatment Tour'
                />
            </div>

            {clinics?.map((clinic: ClinicItemType) => (
                <ClinicItem key={clinic.id} clinic={clinic} />
            ))}
        </div>
    );
}
