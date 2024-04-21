import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

// const initialState= {
//   user: {
//     _id: '65f779642d2bf55a5afab753',
//     firstName: 'abcd',
//     lastName: 'abcd',
//     email: 'abcd@gmail.com',
//     password: '$2b$10$OuZsM7i8F6KEGAZimp.w4.d6GLrezUPYVHm4B7BG6Rhz2fMoJ4OQy',
//     profilePicture: '01.jpg',
//     coverPicture: '',
//     friends: [],
//     gender: 'male',
//     dateOfBirth: '2014-03-10T18:30:00.000Z',
//     location: 'abcd',
//     occupation: 'abcd',
//     viewedProfile: 7272,
//     impressions: 73,
//   },
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjc3OTY0MmQyYmY1NWE1YWZhYjc1MyIsImlhdCI6MTcxMTgxMTA3MH0.MNVM6HXmTY56YNoSlkkCt1iVloJiZxr1oGzOwvt8d0k'
// }

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    }
  },
});

export const { setLogin, setLogout, setFriends, setUser } =
  authSlice.actions;
export default authSlice.reducer;
