import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchText: "",
	formRef: null
}

const headerFormSlice = createSlice({
	name: "headerForm",
	initialState,
	reducers: {
		setSearchText(state, action) {
			state.searchText = action.payload;
		},
		setFormRef(state, action) {
			state.formRef = action.payload;
		}
	}
});

export const { setSearchText, setFormRef } = headerFormSlice.actions;

export const headerFormReducer = headerFormSlice.reducer;