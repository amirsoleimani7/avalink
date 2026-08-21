import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "SideBar",
  initialState: { value: false },
  reducers: {
    hideSide: (state) => {
      state.value = false;
    },
    showSide: (state) => {
      state.value = true;
    },
  },
});

export const { showSide, hideSide } = SideBarSlice.actions;
export default SideBarSlice.reducer;
