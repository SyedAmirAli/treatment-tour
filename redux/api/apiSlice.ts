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
        getClinics: builder.query({ query: () => '/clinics/' }),
        getCategories: builder.query({ query: () => '/categoriess' }),
    }),
});

export const { useGetClinicsQuery, useGetCategoriesQuery } = apiSlice;
export default apiSlice;
