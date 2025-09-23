import { createSlice } from "@reduxjs/toolkit";
import classes from "../ui/notice.module.scss";

export interface statesType {
    isNewNotice: boolean;
    noticeMessageNew: string;
    showNotice: boolean;
    currentMessageNotice: string;
    classesNotice: string;
    noticesQueue: string[];
}

export const initialState: statesType = {
    isNewNotice: false,
    noticeMessageNew: "",
    showNotice: false,
    currentMessageNotice: "",
    classesNotice: classes.notice,
    noticesQueue: []
};

const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
        getNewNotice(state, action) {
            state.isNewNotice = true;
            state.noticeMessageNew = action.payload;
        },
        resetNewNotice(state) {
            state.isNewNotice = false;
            state.noticeMessageNew = "";
        },
        setShowNotice(state, action) {
            state.showNotice = action.payload;
        },
        setCurrentMessageNotice(state, action) {
            state.currentMessageNotice = action.payload;
        },
        setClassesNotice(state, action) {
            state.classesNotice = action.payload;
        },
        setNoticesQueue(state, action) {
            state.noticesQueue = action.payload;
        }
    }
});

export const {
    getNewNotice,
    resetNewNotice,
    setShowNotice,
    setCurrentMessageNotice,
    setClassesNotice,
    setNoticesQueue
} = noticeSlice.actions;

export const noticeReducer = noticeSlice.reducer;
