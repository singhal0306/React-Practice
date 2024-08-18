import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builders) => ({
        login: builders.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        register: builders.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            })
        }),
        logout: builders.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
                body: data
            })
        }),
        updateUser: builders.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = userApiSlice