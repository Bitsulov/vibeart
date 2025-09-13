import { createSlice } from "@reduxjs/toolkit";
import type { ModalTypes } from "./types.js";

interface initialStateType {
    show: boolean;
    type: ModalTypes;
}

const initialState: initialStateType = {
    show: false,
    type: "sign"
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setVisibility: (state, action: { payload: initialStateType }) => {
            state.type = action.payload.type;
            state.show = action.payload.show;
        },
        toggle: state => {
            state.show = !state.show;
        }
    }
});

export const { setVisibility, toggle } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
