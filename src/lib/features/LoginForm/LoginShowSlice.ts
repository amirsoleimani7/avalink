import { createSlice } from "@reduxjs/toolkit";

const ShowReducer = createSlice({
  name: "login",
  initialState: { value: false },

  reducers: {
    showLogin: (state) => {
      state.value = true;

      // adding overflow hidden so the use won't be able to scroll on login page
      document.body.classList.add("overflow");
    },
    hideLogin: (state) => {
      state.value = false;

      //same here
      document.body.classList.remove("overflow");
    },
  },
});

export const { showLogin, hideLogin } = ShowReducer.actions;
export default ShowReducer.reducer;
