import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { noteSlice } from './notes'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        note: noteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})