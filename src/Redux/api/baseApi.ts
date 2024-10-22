import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'tree-plants',
  tagTypes: ['product', 'cart', 'user', 'booking'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tree-plants-server.vercel.app/api',
  }),
  endpoints: () => ({}),
});

export default baseApi;
