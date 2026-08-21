import { createSlice } from "@reduxjs/toolkit";

const ShowReducer = createSlice({
  name: "login",
  initialState: { value: false },

  reducers: {
    showLogin: (state) => {
      state.value = true;
      console.log("show login ")
    },
    hideLogin: (state) => {
      state.value = false;
      console.log("hide login ")

    },
  },
});

export const { showLogin, hideLogin } = ShowReducer.actions;
export default ShowReducer.reducer;
