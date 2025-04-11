import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  user: {},
  mockSubject:'',
};

const slice = createSlice({
  name: "Legacy Builders",
  initialState,
  reducers: {
    setUserToken: (state, { payload }) => {
      state.userToken = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setMockSubject: (state,{payload}) =>{
      state.mockSubject = payload
    }
  },
});

export const { setUserToken, setUser, setMockSubject } = slice.actions;

export default slice.reducer;
