import {
    BaseQueryFn,
    createApi,
    EndpointBuilder,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL, // Use env variable in Next.js
    prepareHeaders: (headers) => {
        const token = window.localStorage.getItem('token'); // Example: JWT token
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        headers.set('Accept', 'application/json');
        return headers;
    },
});

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: (
        builder: EndpointBuilder<
            BaseQueryFn<
                string | FetchArgs,
                unknown,
                FetchBaseQueryError,
                object,
                FetchBaseQueryMeta
            >,
            never,
            'api'
        >
    ) => ({
        getClinics: builder.query({ query: () => '/clinicsssssss' }),
        getCategories: builder.query({ query: () => '/categoriess' }),
        getLocations: builder.query({ query: () => '/countriess' }),
        getClinicsDoctors: builder.query({
            query: (id: number | string | string[]) => `/clinics/${id}/doctors`,
        }),

        // for Locations
        getCountry: builder.query({
            query: (id: number | string | string[]) => `/countriess/${id}`,
        }),
        getClinicsByCountries: builder.query({
            query: (id: number | string | string[]) =>
                `/countriess/${id}/clinics`,
        }),
        getCountryState: builder.query({
            query: (id: number | string | string[]) => `/statess/${id}`,
        }),
        getClinicsByCountryState: builder.query({
            query: (id: number | string | string[]) => `/statess/${id}/clinics`,
        }),
        // end Locations

        // for treatment
        getTreatment: builder.query({
            query: (id: number | string | string[]) => `/categories/${id}`,
        }),
        getClinicsByTreatment: builder.query({
            query: (id: number | string | string[]) =>
                `/categories/${id}/clinics`,
        }),
        getTreatmentState: builder.query({
            query: (id: number | string | string[]) => `/subcategories/${id}`,
        }),
        getClinicsByTreatmentState: builder.query({
            query: (id: number | string | string[]) =>
                `/subcategories/${id}/clinics`,
        }),
        // end treatment

        // for single page clinics
        getClinic: builder.query({
            query: (id: number | string | string[]) => '/clinicsssssss/' + id,
        }),
    }),
});

export const {
    useGetClinicQuery,
    useGetCountryQuery,
    useGetClinicsQuery,
    useGetCategoriesQuery,
    useGetLocationsQuery,
    useGetClinicsDoctorsQuery,
    useGetClinicsByCountriesQuery,
    useGetCountryStateQuery,
    useGetClinicsByCountryStateQuery,
    //treatment
    useGetTreatmentQuery,
    useGetClinicsByTreatmentQuery,
    useGetTreatmentStateQuery,
    useGetClinicsByTreatmentStateQuery,
} = apiSlice;
export default apiSlice;
