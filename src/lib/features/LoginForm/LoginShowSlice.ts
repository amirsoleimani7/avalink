import { createSlice } from "@reduxjs/toolkit";

const ShowReducer = createSlice({
  name: "login",
  initialState: { value: false },

  reducers: {
    showLogin: (state) => {
      state.value = true;
    },
    hideLogin: (state) => {
      state.value = false;
    },
  },
});

export const { showLogin, hideLogin } = ShowReducer.actions;
export default ShowReducer.reducer;
