import { createSlice } from "@reduxjs/toolkit";
// import { validate } from "email-validator";

const ShowReducer = createSlice({
  name: "login",
  initialState: {
    showAuth : false,
    LoginSec: false,
    SignUpSec: false,
    forgotSec: false,
  },

  reducers: {
    showLogin: (state) => {
      state.showAuth = true;
      state.LoginSec = true;
      state.SignUpSec = false;
      state.forgotSec = false;
      document.body.classList.add("overflow");
    },
    showSignUp: (state) => {
      
      state.showAuth = true;
      state.LoginSec = false;
      state.SignUpSec = true;
      state.forgotSec = false;
      document.body.classList.add("overflow");
    },
    showForgot: (state) => {

      state.showAuth = true;
      state.LoginSec = false;
      state.SignUpSec = false;
      state.forgotSec = true;
      document.body.classList.add("overflow");
    },
    hideAll: (state) => {

      state.showAuth = false;
      state.LoginSec = false;
      state.SignUpSec = false;
      state.forgotSec = false;
      document.body.classList.remove("overflow");
    },
  },
});

export const { showLogin , showSignUp,showForgot,hideAll } = ShowReducer.actions;
export default ShowReducer.reducer;
