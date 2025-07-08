import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-seven-jade.vercel.app/api/books",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/",
      providesTags: ["Book"],
    }),
    postBook: builder.mutation({
      query: (book) => ({
        url: "/",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    getBookById: builder.query({
      query: (id) => `/${id}`,
    }),

    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ['Book']
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation
} = booksApi;
