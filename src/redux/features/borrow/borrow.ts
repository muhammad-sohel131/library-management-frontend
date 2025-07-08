import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-seven-jade.vercel.app/api/borrow",
  }),
  tagTypes: ["Borrow"],
  endpoints: (build) => ({
    postBorrow: build.mutation({
      query: (borrow) => ({
        url: "/",
        method: "POST",
        body: borrow,
      }),
      invalidatesTags: ["Borrow"],
    }),
    getBorrow: build.query({
      query: () => "/",
      providesTags: ["Borrow"],
    }),
  }),
});

export const { usePostBorrowMutation, useGetBorrowQuery } = borrowApi;
