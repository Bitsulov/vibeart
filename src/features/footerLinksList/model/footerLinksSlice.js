import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	footerLinksHeight: null,
	OPENFOOTERLINKSHEIGHT: null,
	isFooterLinksOpen: false
}

const footerLinksSlice = createSlice({
	name: "footerLinks",
	initialState,
	reducers: {
		setFooterLinksHeight(state, action) {
			state.footerLinksHeight = action.payload;
		},
		setOpenFooterLinksHeight(state, action) {
			if(state.OPENFOOTERLINKSHEIGHT === null) {
				state.OPENFOOTERLINKSHEIGHT = action.payload;
			}
		},
		setIsFooterLinksOpen(state, action) {
			state.isFooterLinksOpen = action.payload;
		}
	}
});

export const {setFooterLinksHeight, setOpenFooterLinksHeight, setIsFooterLinksOpen} = footerLinksSlice.actions;

export const footerLinksReducer = footerLinksSlice.reducer;