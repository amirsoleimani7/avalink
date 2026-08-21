import { createSlice } from "@reduxjs/toolkit";

const ShowReducer = createSlice({
  name: "login",
  initialState: { value: false },

  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});


export const { toggle } = ShowReducer.actions;
export default ShowReducer.reducer;

