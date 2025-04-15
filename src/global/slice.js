import { createSlice } from "@reduxjs/toolkit";
import PastQuestion from "../pages/jacob/PastQuestion";

const initialState = {
  userToken: "",
  user: {},
  exam: "",
  year: "",
  pastQuestions: [],
  pastQuestionsOption: {
    optionA: false,
    optionB: false,
    optionC: false,
    optionD: false,
  },
  mockSubject: "",
  isOverview: false,
  mockExamQuestions: [],
  mockExamOptions: {
    optionA: false,
    optionB: false,
    optionC: false,
    optionD: false,
  },
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
    setPastQuestions: (state, { payload }) => {
      state.pastQuestions = payload;
    },
    setPastQuestionsOption: (state, { payload }) => {
      switch (payload) {
        case "A":
          state.pastQuestionsOption.optionA = true;
          state.pastQuestionsOption.optionB = false;
          state.pastQuestionsOption.optionC = false;
          state.pastQuestionsOption.optionD = false;
          break;
        case "B":
          state.pastQuestionsOption.optionA = false;
          state.pastQuestionsOption.optionB = true;
          state.pastQuestionsOption.optionC = false;
          state.pastQuestionsOption.optionD = false;

          break;
        case "C":
          state.pastQuestionsOption.optionA = false;
          state.pastQuestionsOption.optionB = false;
          state.pastQuestionsOption.optionC = true;
          state.pastQuestionsOption.optionD = false;

          break;
        case "D":
          state.pastQuestionsOption.optionA = false;
          state.pastQuestionsOption.optionB = false;
          state.pastQuestionsOption.optionC = false;
          state.pastQuestionsOption.optionD = true;
          break;

        default:
          state.pastQuestionsOption.optionA = false;
          state.pastQuestionsOption.optionB = false;
          state.pastQuestionsOption.optionC = false;
          state.pastQuestionsOption.optionD = false;
          break;
      }
    },

    setMockSubject: (state, { payload }) => {
      if (state.mockSubject === payload) {
        state.mockSubject = "";
      } else {
        state.mockSubject = payload;
      }
    },
    setIsOverview: (state, { payload }) => {
      state.isOverview = !state.isOverview;
    },
    setMockExamQuestion: (state, { payload }) => {
      state.mockExamQuestions = payload;
    },
    setMockExamOption: (state, { payload }) => {
      switch (payload) {
        case "A":
          state.mockExamOptions.optionA = true;
          state.mockExamOptions.optionB = false;
          state.mockExamOptions.optionC = false;
          state.mockExamOptions.optionD = false;
          break;
        case "B":
          state.mockExamOptions.optionA = false;
          state.mockExamOptions.optionB = true;
          state.mockExamOptions.optionC = false;
          state.mockExamOptions.optionD = false;
          break;
        case "C":
          state.mockExamOptions.optionA = false;
          state.mockExamOptions.optionB = false;
          state.mockExamOptions.optionC = true;
          state.mockExamOptions.optionD = false;
          break;
        case "D":
          state.mockExamOptions.optionA = false;
          state.mockExamOptions.optionB = false;
          state.mockExamOptions.optionC = false;
          state.mockExamOptions.optionD = true;
          break;

        default:
          state.mockExamOptions.optionA = false;
          state.mockExamOptions.optionB = false;
          state.mockExamOptions.optionC = false;
          state.mockExamOptions.optionD = false;
          break;
      }
    },
    cancelExam: (state, { payload }) => {
      state.mockSubject = "";
      state.mockExamOptions.optionA = false;
      state.mockExamOptions.optionB = false;
      state.mockExamOptions.optionC = false;
      state.mockExamOptions.optionD = false;
    },
  },
});

export const {
  setUserToken,
  setUser,
  setMockSubject,
  setIsOverview,
  setMockExamQuestion,
  setMockExamOption,
  cancelExam,
  setExam,
  setYear,
  setPastQuestions,
  setPastQuestionsOption,
} = slice.actions;

export default slice.reducer;
