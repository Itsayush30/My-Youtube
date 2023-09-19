import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
