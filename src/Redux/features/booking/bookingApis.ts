import baseApi from '../../api/baseApi';

const bookingApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    booking: builder.mutation({
      query: bookingInfo => ({
        url: `/bookings`,
        method: 'POST',
        body: bookingInfo,
      }),
      invalidatesTags: ['cart', 'booking'],
    }),
    getbookings: builder.query({
      query: email => ({
        url: `/bookings/${email}`,
        method: 'GET',
      }),
      providesTags: ['booking'],
    }),
  }),
});

export const { useBookingMutation, useGetbookingsQuery } = bookingApis;
