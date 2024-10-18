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
  }),
});

export const { useGetCartByEmailQuery, useAddToCartMutation } = cartApis;
