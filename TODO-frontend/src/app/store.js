import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from './api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../features/auth/authSlice'

/*
    a Redux store with the necessary middleware and reducers to handle API requests and responses,
    and provides a simple way to handle user authentication state.
*/
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    // devTools: false
    devTools: true
})

setupListeners(store.dispatch)