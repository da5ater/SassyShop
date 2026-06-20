import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({ url: `${USER_URL}/login`, method: 'POST', body: data })
        }),

        register: builder.mutation({
            query: (data) => ({ url: `${USER_URL}`, method: 'POST', body: data })
        }),

        logout: builder.mutation({
            query: () => ({ url: `${USER_URL}/logout`, method: 'POST' })
        }),

        getProfile: builder.query({
            query: () => ({ url: `${USER_URL}/profile`, method: 'GET' })
        }),

        setProfile: builder.mutation({
            query: (data) => ({ url: `${USER_URL}/profile`, method: 'PUT', body: data })
        })
    })
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useGetProfileQuery, useSetProfileMutation } = userApiSlice;