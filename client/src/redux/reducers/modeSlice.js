import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState:"light",
  reducers: {
    setMode: (state) => {
      return state === "light" ? "dark" : "light";
    }
  },
});

export const { setMode } =
  modeSlice.actions;
export default modeSlice.reducer;
