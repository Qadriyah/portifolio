"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  active: string;
}

const initialState = {
  active: "about",
} as MenuState;

const namespace = "menu";

const menuSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setActive(state, { payload }) {
      state.active = payload;
    },
  },
});

export const { setActive } = menuSlice.actions;

export default menuSlice.reducer;
