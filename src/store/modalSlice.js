import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		show: false,
	},
	reducers: {
		setVisibility: (state, action) => {
			state.type = action.payload.type;
			state.show = action.payload.show;
		},
		toggle: (state) => {
			state.show = !state.show;
		},
	},
});

export const { setVisibility, toggle } = modalSlice.actions;

export default modalSlice.reducer;