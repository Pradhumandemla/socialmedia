import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


export const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setTimeline: (state, action) => {
      return state = action.payload;
    },
    setPost: (state, action) => {
      const updatedPosts = state.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state = updatedPosts;
    },
  },
});

export const { setTimeline, setPost } =
  timelineSlice.actions;
export default timelineSlice.reducer;
