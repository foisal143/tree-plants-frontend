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
  }),
});

export const { useUserRegisterMutation } = userApis;
