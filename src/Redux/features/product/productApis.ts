import baseApi from '../../api/baseApi';

const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: query => ({
        url: `/products?searchTerm=${query.searchTerm}&sort=${query.sort}&limit=${query.limit}&page=${query.page}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    addProduct: builder.mutation({
      query: productInfo => ({
        url: `/products`,
        method: 'POST',
        body: productInfo,
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const { useGetAllProductQuery, useAddProductMutation } = productApis;
