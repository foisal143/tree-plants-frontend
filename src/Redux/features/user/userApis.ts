import baseApi from '../../api/baseApi';

const userApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    userRegister: builder.mutation({
      query: userInfo => ({
        url: `/users`,
        method: 'POST',
        body: userInfo,
      }),
    }),
    singleUser: builder.query({
      query: email => ({
        url: `/users/${email}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useSingleUserQuery } = userApis;
