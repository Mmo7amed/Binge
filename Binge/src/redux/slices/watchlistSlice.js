import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shows: []
}

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        addShow: (state,action) => {
            state.shows.push(action.payload);
        },
        removeShow: (state,action) => {
            state.shows = state.shows.filter((show) => show.id !== action.payload);
        }
    }
});

export const {addShow, removeShow} = showsSlice.actions;
export default showsSlice.reducer;