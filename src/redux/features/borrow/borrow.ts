import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath: 'borrow',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://library-management-seven-jade.vercel.app/api/borrow'
    }),
    endpoints: (build) => ({
        postBorrow: build.mutation({
            query: (borrow) => ({
                url: '/',
                method: 'POST',
                body: borrow
            })
        })
    })
})

export const { usePostBorrowMutation } = borrowApi