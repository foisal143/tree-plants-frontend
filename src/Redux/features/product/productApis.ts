import baseApi from '../../api/baseApi';

const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: query => ({
        url: `/products?searchTerm=${query.searchTerm}&sort=${query.sort}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApis;
