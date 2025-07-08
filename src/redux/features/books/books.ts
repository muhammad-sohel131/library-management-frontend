import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://library-management-seven-jade.vercel.app/api/'
    }),
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBooks : builder.query({
            query: () => 'books',
            providesTags: ['Book']
        }),
        postBook: builder.mutation({
            query: (book) => ({
                url: 'books',
                method: 'POST',
                body: book
            }),
            invalidatesTags: ['Book']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Book']
        })
    })
})

export const { useGetBooksQuery, usePostBookMutation, useDeleteBookMutation } = booksApi