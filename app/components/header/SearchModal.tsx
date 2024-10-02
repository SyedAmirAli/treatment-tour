'use client';
import assets from '@/assets';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearch } from '@/redux/slices/HeaderSlice';
import React, { useEffect, useState } from 'react';
// import demoSearchResult from '@/static/demo-search-result.json';
import info from '@/assets/info';
import {
    useGetClinicsQuery,
    useSearchClinicsMutation,
} from '@/redux/api/apiSlice';
import Loading from '../commons/Loading';
import SearchItemCard from './SearchItemCard';

interface ClinicDetails {
    id: number;
    name: string;
    description: string;
    address: string;
    main_image: string;
    gallery_images: string[]; // Assuming it's a parsed array of image strings
    map_embed_code: string;
    country_id: number;
    state_id: number;
    created_at: string; // ISO date format
    country: string;
    state: string;
    average_rating: number;
    total_rating?: number;
    caption?: string;
}

export default function SearchModal() {
    const dispatch = useAppDispatch();
    const [filteredClinics, setFilteredClinics] = useState<ClinicDetails[]>([]);
    const { query } = useAppSelector((state) => state.header.search);

    const {
        isLoading,
        isError,
        error,
        data: clinics,
    } = useGetClinicsQuery(undefined);

    const [
        searchClinic,
        { isLoading: isSearchLoading, data: searchData, isSuccess },
    ] = useSearchClinicsMutation();

    useEffect(() => {
        if (Array.isArray(clinics) && query.trim() !== '') {
            const lowerCaseQuery = query.toLowerCase();
            setFilteredClinics(
                clinics.filter((clinic: ClinicDetails) =>
                    clinic.name.toLowerCase().includes(lowerCaseQuery)
                )
            );
        } else {
            setFilteredClinics([]);
        }
    }, [clinics, query]);

    useEffect(() => {
        if (isSuccess && Array.isArray(searchData)) {
            setFilteredClinics(searchData);
        }
    }, [searchData, isSuccess]);

    info(
        'SearchModal.tsx',
        'useGetClinicQuery',
        {
            isLoading,
            isError,
            error,
            clinics,
            searchData,
        },
        'ignores'
    );

    info(query);

    function closeSearchModal() {
        dispatch(setSearch({ status: false }));
    }
    function searchQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setSearch({ query: event.target.value }));
    }

    async function searchHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        searchClinic(query);
    }

    return (
        <div className='fixed z-20 top-0 flex items-center justify-center left-0 w-full h-screen bg-black/10 px-2'>
            {(isLoading || isSearchLoading) && <Loading />}

            <div className='max-w-xl bg-white p-6 w-full border border-solid border-slate-300 rounded-xl'>
                <form
                    onSubmit={searchHandler}
                    className='w-full border-b border-solid border-slate-300 mb-2 pb-5'>
                    <div className='w-full flex items-center justify-center'>
                        <input
                            value={query}
                            onChange={searchQueryHandler}
                            type='search'
                            placeholder='Find your target'
                            className='w-full bg-slate-100 text-lg border border-solid rounded-s-md border-slate-400 px-3 py-2 text-primary focus:border-primary ring-0 outline-none font-medium tracking-wide font-mono'
                        />
                        <button className='px-3 py-2 bg-black fill-slate-100 rounded-r-md duration-500 hover:bg-primary'>
                            <span className='block w-5 py-[5.25px]'>
                                {assets.svg.sendPlane}
                            </span>
                        </button>
                    </div>
                </form>

                <div className='w-full'>
                    <div className='flex w-full justify-between items-center'>
                        <h1 className='text-xl font-medium'>
                            <span className='text-primary font-bold pr-2'>
                                {filteredClinics.length || 'No'}
                            </span>
                            Results found in your search.
                        </h1>

                        <button
                            className='flex text-sm bg-primary text-slate-100 fill-slate-100 capitalize font-medium items-center justify-center pl-2 pr-3 py-0.5 rounded-full gap-1 duration-500 hover:bg-red-500 hover:tracking-wide group'
                            onClick={closeSearchModal}>
                            <i className='block size-4 rotate-45 group-hover:rotate-0 duration-500'>
                                {assets.svg.close}
                            </i>
                            <span className='block pb-0.5'>close</span>
                        </button>
                    </div>

                    <div className='w-full mt-3 max-h-[50vh] overflow-y-scroll sm:scrollbar-primary'>
                        {filteredClinics.map((clinic: ClinicDetails) => (
                            <SearchItemCard
                                key={clinic.id}
                                id={clinic.id}
                                rating={clinic.average_rating}
                                title={clinic.name}
                                totalRating={clinic?.total_rating || 0}
                                caption={clinic?.caption || ''}
                                description={clinic.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
