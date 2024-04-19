import { combineReducers } from "@reduxjs/toolkit";
import menuSlice from "./menu";

const rootReducer = combineReducers({
  menu: menuSlice,
});

export default rootReducer;
