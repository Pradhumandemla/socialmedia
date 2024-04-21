import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modeReducer from "./modeSlice";
import timelineReducer from "./timelineSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  timeline: timelineReducer,
  mode: modeReducer,
});

export default rootReducer;