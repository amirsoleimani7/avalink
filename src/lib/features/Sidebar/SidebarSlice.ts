import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name : "SideBar",
    initialState : {value : false},
    reducers : {
        hide : (state) => {
            state.value = false;
        },
        show : (state) => {
            state.value = true
        }
    }
});


