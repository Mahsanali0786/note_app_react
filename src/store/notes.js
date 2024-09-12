import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    object: {}
};

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        handleNoteObject: (state, action) => {
            state.object = action.payload
        }
    },
});

export const {
    handleNoteObject
} = noteSlice.actions;
export default noteSlice.reducer;