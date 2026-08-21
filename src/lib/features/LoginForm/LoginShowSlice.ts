import { createSlice } from "@reduxjs/toolkit";
// import { validate } from "email-validator";

const ShowReducer = createSlice({
  name: "login",
  initialState: {
    LoginSec: false,
    SignUpSec: false,
    forgotSec: false,
  },

  reducers: {
    showLogin: (state) => {
      state.LoginSec = true;
      state.SignUpSec = false;
      state.forgotSec = false;
      document.body.classList.add("overflow");
    },
    // hideLogin: (state) => {
    //   state.LoginSec = false;
    //   state.SignUpSec = false;
    //   state.forgotSec = false;
    //   document.body.classList.remove("overflow");
    // },
    showSignUp: (state) => {
      state.LoginSec = false;
      state.SignUpSec = true;
      state.forgotSec = false;
      document.body.classList.add("overflow");
    },
    showForgot: (state) => {
      state.LoginSec = false;
      state.SignUpSec = false;
      state.forgotSec = true;
      document.body.classList.add("overflow");
    },
    hideAll: (state) => {
      state.LoginSec = false;
      state.SignUpSec = false;
      state.forgotSec = false;
      document.body.classList.remove("overflow");
    },
  },
});

export const { showLogin , showSignUp,showForgot,hideAll } = ShowReducer.actions;
export default ShowReducer.reducer;
