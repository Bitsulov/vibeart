import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	notifications: 1, // 0
	messages: 1 // 0
}

const notificationsPagesSlice = createSlice({
	name: "notificationsPages",
	initialState,
	reducers: {
		setNotifications(state, action) {
			state.notifications = action.payload;
		},
		setMessages(state, action) {
			state.messages = action.payload;
		}
	}
});

export const {setNotifications, setMessages} = notificationsPagesSlice.actions;

export const notificationsPagesReducer = notificationsPagesSlice.reducer;