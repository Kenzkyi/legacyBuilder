import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
};

const slice = createSlice({
  name: "Legacy Builders",
  initialState,
  reducers: {
    setUserToken: (state, { payload }) => {
      state.userToken = payload;
    },
  },
});

export const { setUserToken } = slice.actions;

export default slice.reducer;
