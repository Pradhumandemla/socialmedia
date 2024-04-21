import { setTimeline } from "redux/reducers/timelineSlice";
import { store } from "redux/store";

let user = store.getState().auth.user;

export const getTimeline = async (dispatch, userId = false) => {
  let url = (userId)
  ? (process.env.REACT_APP_BACKEND + "/posts/" + userId) 
  : (process.env.REACT_APP_BACKEND + "/posts");
  
  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });
  const data = await response.json();
  await dispatch(setTimeline(data));
};

export const createPost = async (dispatch,formData) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    body: formData,
  });
  const posts = await response.json();
};


