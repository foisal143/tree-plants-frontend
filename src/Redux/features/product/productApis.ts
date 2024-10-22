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
    updateProduct: builder.mutation({
      query: payload => ({
        url: `/products/${payload.id}`,
        method: 'PATCH',
        body: payload.productInfo,
      }),
      invalidatesTags: ['product'],
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApis;
