import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://64.227.136.152:9018/iim/`,
        prepareHeaders: (headers, { getState }) => {
            const token = "123";
            if (token) {
                headers.set("Authorization", `1234`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        authenticate: builder.mutation<any, any>({
            query: (payload) => ({
                url: 'authenticate',
                method: "POST",
                body: payload
            })
        })
    })
});

export const { useAuthenticateMutation } = authApi;