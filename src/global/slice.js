import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  user: {},
  mockSubject: "",
  exam: "",
  year: "",
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
    setMockSubject: (state, { payload }) => {
      state.mockSubject = payload;
    },
    setExam: (state, { payload }) => {
      state.exam = payload;
    },
    setYear: (state, { payload }) => {
      state.year = payload;
    },
  },
});

export const { setUserToken, setUser, setMockSubject, setExam, setYear } =
  slice.actions;

export default slice.reducer;
