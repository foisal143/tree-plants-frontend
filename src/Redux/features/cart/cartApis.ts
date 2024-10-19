import baseApi from '../../api/baseApi';

const cartApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    addToCart: builder.mutation({
      query: cartInfo => ({
        url: '/carts',
        method: 'POST',
        body: cartInfo,
      }),
      invalidatesTags: ['cart'],
    }),
    getCartByEmail: builder.query({
      query: email => ({
        url: `/carts/${email}`,
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),
    updateQuantity: builder.mutation({
      query: payload => ({
        url: `/carts/${payload.id}`,
        method: 'PATCH',
        body: { quantity: payload.quantity },
      }),
      invalidatesTags: ['cart'],
    }),
  }),
});

export const {
  useGetCartByEmailQuery,
  useAddToCartMutation,
  useUpdateQuantityMutation,
} = cartApis;
