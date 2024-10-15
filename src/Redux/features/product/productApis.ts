import baseApi from '../../api/baseApi';

const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: query => ({
        url: `/products?searchTerm=${query.searchTerm}&sort=${query.sort}&limit=${query.limit}&page=${query.page}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApis;
