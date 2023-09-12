import { createSlice } from '@reduxjs/toolkit'

/*
    Handle the auth of the api end points such as the login/sendLogout/refresh
    login - to login the user
    sendLogout - to logout the user
    refresh - to refresh (by giving the user a refresh token)
*/

const authSlice = createSlice({
    name: 'auth',
    // we expecting to receive the token back, thus null
    initialState: { token: null },
    // the two object we creating
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.token = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token