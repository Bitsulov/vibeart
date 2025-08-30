import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	burgerLinksHeight: null,
	BURGEROPENLINKSHEIGHT: null,
	isBurgerOpen: false
}

const burgerSlice = createSlice({
	name: "burger",
	initialState,
	reducers: {
		setBurgerLinksHeight(state, action) {
			state.burgerLinksHeight = action.payload;
		},
		setBurgerOpenLinksHeight(state, action) {
			if(state.BURGEROPENLINKSHEIGHT === null) {
				state.BURGEROPENLINKSHEIGHT = action.payload;
			}
		},
		setIsBurgerOpen(state, action) {
			state.isBurgerOpen = action.payload;
		}
	}
});

export const {setBurgerLinksHeight, setBurgerOpenLinksHeight, setIsBurgerOpen} = burgerSlice.actions;

export const burgerReducer = burgerSlice.reducer;