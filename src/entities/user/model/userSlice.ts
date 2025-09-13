import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    userName: "",
    firstName: "",
    secondName: "",
    srcImg: "",
    description: "",
    subcribers: 0,
    subcribes: 0,
    works: 0,
    status: "offline"
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.secondName = action.payload.secondName;
            state.srcImg = action.payload.srcImg;
            state.userName = action.payload.userName;
            state.description = action.payload.description;
            state.subcribers = action.payload.subcribers;
            state.subcribes = action.payload.subcribes;
            state.works = action.payload.works;
            state.status = action.payload.status;
        }
    }
});

export const { setUserInfo } = userSlice.actions;

export const userReducer = userSlice.reducer;
