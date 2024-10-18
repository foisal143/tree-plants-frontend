import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'tree-plants',
  tagTypes: ['product', 'cart', 'user'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: () => ({}),
});

export default baseApi;
