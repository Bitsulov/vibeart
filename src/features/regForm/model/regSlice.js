import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	emailValueReg: "",
	passwordValueReg: "",
	passwordAgainValueReg: "",
	emailRegError: false,
	passwordRegError: false,
	passwordAgainRegError: false,
	errorText: ""
}

const regSlice = createSlice({
	name: "reg",
	initialState,
	reducers: {
		setEmailValueReg(state, action) {
			state.emailValueReg = action.payload;
		},
		setPasswordValueReg(state, action) {
			state.passwordValueReg = action.payload;
		},
		setPasswordAgainValueReg(state, action) {
			state.passwordAgainRegError = action.payload;
		},
		setEmailRegError(state, action) {
			state.emailRegError = action.payload
		},
		setPasswordRegError(state, action) {
			state.passwordRegError = action.payload
		},
		setPasswordAgainRegError(state, action) {
			state.passwordAgainRegError = action.payload
		},
		setErrorText(state, action) {
			state.errorText = action.payload
		}
	}
});

export const {setEmailValueReg, setPasswordValueReg, setPasswordAgainValueReg, setEmailRegError, setPasswordRegError, setPasswordAgainRegError, setErrorText} = regSlice.actions;

export const regReducer = regSlice.reducer;