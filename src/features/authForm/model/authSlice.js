import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	emailValueSign: "",
	passwordValueSign: "",
	emailSignError: false,
	passwordSignError: false,
	errorText: ""
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setEmailValueSign(state, action) {
			state.emailValueSign = action.payload;
		},
		setPasswordValueSign(state, action) {
			state.passwordValueSign = action.payload;
		},
		setEmailSignError(state, action) {
			state.emailSignError = action.payload
		},
		setPasswordSignError(state, action) {
			state.passwordSignError = action.payload
		},
		setErrorText(state, action) {
			state.errorText = action.payload
		}
	}
});

export const {setEmailValueSign, setPasswordValueSign, setEmailSignError, setPasswordSignError, setErrorText} = authSlice.actions

export const authReducer = authSlice.reducer;