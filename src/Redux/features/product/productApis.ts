import baseApi from '../../api/baseApi';

const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApis;
