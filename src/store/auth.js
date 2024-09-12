import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    object: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleAuthObject: (state, action) => {
            state.object = action.payload
        }
    },
});

export const {
    handleAuthObject
} = authSlice.actions;
export default authSlice.reducer;