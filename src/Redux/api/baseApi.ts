import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'tree-plants',
  tagTypes: ['product', 'cart', 'user', 'booking'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: builder => ({
    deleteSingleCart: builder.mutation({
      query: id => ({
        url: `/carts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
    deleteManyCart: builder.mutation({
      query: email => ({
        url: `/carts/all/${email}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
});

export default baseApi;
