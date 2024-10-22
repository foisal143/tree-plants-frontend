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
    getAllBookings: builder.query({
      query: () => ({
        url: `/bookings`,
        method: 'GET',
      }),
      providesTags: ['booking'],
    }),
    updateStatus: builder.mutation({
      query: payload => ({
        url: `/bookings/${payload.id}`,
        method: 'PATCH',
        body: { status: payload.status },
      }),
      invalidatesTags: ['booking'],
    }),
    deleteBookings: builder.mutation({
      query: id => ({
        url: `/bookings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['booking'],
    }),
  }),
});

export const {
  useBookingMutation,
  useGetbookingsQuery,
  useDeleteBookingsMutation,
  useUpdateStatusMutation,
  useGetAllBookingsQuery,
} = bookingApis;
