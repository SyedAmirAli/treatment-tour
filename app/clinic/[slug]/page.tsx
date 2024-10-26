'use client';
import info from '@/assets/info';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Intro from './Intro';
import ViewIntoImages from './ViewIntoImages';
import Gallery from './Gallery';
import Appoint from './Appoint';
import Review from './Review';
import AdditionalServices from './AdditionalServices';
import Doctors from './Doctors';
import AfterBefore from './AfterBefore';
import PaymentService from './PaymentService';
import Map from './Map';
import { useGetClinicQuery } from '@/redux/api/apiSlice';
import Quotes from './Quotes';
import Loading from '@/app/components/commons/Loading';

export default function ClinicPage() {
    const { slug } = useParams();
    const [isGalleyModal, setIsGalleyModal] = useState(false);
    info('clinic/[slug].tsx', slug);

    const {
        isLoading,
        isError,
        error,
        data,
        originalArgs,
        requestId,
        endpointName,
    } = useGetClinicQuery(slug);
    info('clinic/[slug].tsx', 'useGetClinicQuery', {
        isLoading,
        isError,
        error,
        data,
        originalArgs,
        requestId,
        endpointName,
    });

    if (isLoading) return <Loading />;

    if (!isLoading && isError) {
        if (typeof error === 'object' && error !== null && 'data' in error) {
            const errorData = error.data as { message?: string }; // Narrowing error.data
            return errorData?.message ? errorData.message : 'Error...';
        }
        return 'Error...';
    }

    return (
        <div className='container py-10 px-2'>
            <Intro
                name={data?.name}
                reviews={data?.reviews || 0}
                address={data?.address}
                ratings={data?.average_rating || 0}
            />

            {isGalleyModal && (
                <ViewIntoImages
                    closeModal={() => setIsGalleyModal(false)}
                    image={data?.main_image}
                    photos={data?.gallery_images}
                />
            )}

            <Gallery
                openModal={() => setIsGalleyModal(true)}
                image={data?.main_image}
                photos={data?.gallery_images}
            />

            <Appoint
                name={data?.name}
                title={data?.title || ''}
                description={data?.description || ''}
            />

            <Quotes clinicId={data?.id} />

            <Review clinicId={data?.id} />

            <AdditionalServices />

            <Doctors clinicId={data?.id} />

            <AfterBefore clinicId={data?.id} />

            <PaymentService />

            {/* <OperationHour /> */}

            <Map embedCode={data?.map_embed_code} />
        </div>
    );
}
