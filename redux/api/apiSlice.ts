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
        getDoctor: builder.query({
            query: (id: number | string | string[]) =>
                `/clinicss/${id}/doctorss`,
        }),
        getPortfolios: builder.query({
            query: (id: number | string | string[]) =>
                `/clinicss/${id}/portfolioss`,
        }),
        getQuotes: builder.query({
            query: (id: number | string | string[]) =>
                `/clinicss/${id}/quotess`,
        }),
        getReviews: builder.query({
            query: (id: number | string | string[]) =>
                `/clinicss/${id}/reviewss`,
        }),
    }),
});

export const {
    useGetReviewsQuery,
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
    //
    useGetDoctorQuery,
    useGetPortfoliosQuery,
    useGetQuotesQuery,
} = apiSlice;
export default apiSlice;
