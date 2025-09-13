import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false
};

const pageStatsSlice = createSlice({
    name: "pageStats",
    initialState,
    reducers: {
        setIsLoaded(state, action) {
            state.isLoaded = action.payload;
        }
    }
});

export const { setIsLoaded } = pageStatsSlice.actions;

export const pageStatsReducer = pageStatsSlice.reducer;
