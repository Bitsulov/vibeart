import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: ""
};

const headerFormSlice = createSlice({
    name: "headerForm",
    initialState,
    reducers: {
        setSearchText(state, action) {
            state.searchText = action.payload;
        }
    }
});

export const { setSearchText } = headerFormSlice.actions;

export const headerFormReducer = headerFormSlice.reducer;
