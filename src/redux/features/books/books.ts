import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://library-management-seven-jade.vercel.app/api/'
    }),
    endpoints: (builder) => ({
        getBooks : builder.query({
            query: () => 'books'
        })
    })
})

export const { useGetBooksQuery } = booksApi