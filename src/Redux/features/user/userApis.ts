import baseApi from '../../api/baseApi';

const userApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    userRegister: builder.mutation({
      query: userInfo => ({
        url: `/users`,
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: ['user'],
    }),
    singleUser: builder.query({
      query: email => ({
        url: `/users/${email}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    allUser: builder.query({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: `/users/${payload.id}`,
        method: 'PATCH',
        body: payload.userInfo,
      }),
      invalidatesTags: ['user'],
    }),
    deleteUser: builder.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useSingleUserQuery,
  useAllUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApis;
