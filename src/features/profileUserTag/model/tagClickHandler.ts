import { getNewNotice } from "features/notice/model/noticeSlice.js";
import type React from "react";
import type { Dispatch } from "@reduxjs/toolkit";

export function tagClickHandler(e: React.MouseEvent, dispatch: Dispatch, userName: string) {
    navigator.clipboard.writeText(`@${userName}`);
    dispatch(getNewNotice("Тег пользователя cкопирован"));
}
