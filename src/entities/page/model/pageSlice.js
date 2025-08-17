import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoaded: false
}

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setIsLoaded(state, action) {
			state.isLoaded = action.payload;
		}
	}
});

export const { setIsLoaded } = pageSlice.actions;

export const pageReducer = pageSlice.reducer;