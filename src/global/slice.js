import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  user: {},

  mockSubject: "",
  exam: "",
  year: "",
  mockSubject: "",
  isOverview: false,
  mockExamQuestions: [],
  mockExamOptions: {
    optionA:false,
    optionB:false,
    optionC:false,
    optionD:false,
  },
  examMeter: 0,
  examTimerMins: 0,
  examTimerSecs: 0,
  navState: {
    overview: true,
    mockExam: false,
    pastQuestion: false,
    profile: false,
    subscription: false,
  },
  logout: false,
  leavingNow: false,
  filteredArray: [],
  year:"",
  exam:""
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
    cancelExam: (state,{payload})=>{
      state.mockSubject = ''
      state.mockExamOptions.optionA = false
      state.mockExamOptions.optionB = false
      state.mockExamOptions.optionC = false
      state.mockExamOptions.optionD = false

    },
    previousQuestion: (state,{payload})=>{
      state.examMeter = state.examMeter - 2
    },
    nextQuestion: (state,{payload})=>{
      state.examMeter = state.examMeter + 2
    },
    setExamTimer: (state,{payload})=>{
      state.examMeter = 0
      if(payload === 'FREEMIUM'){
        state.examTimerMins = 9
        state.examTimerSecs = 59
      }else{
        state.examTimerMins = 29
        state.examTimerSecs = 59
      }
    },
    theExamTimer: (state,{payload})=>{
      if(state.examTimerSecs === 0){
          state.examTimerMins-- 
          state.examTimerSecs = 59
        }else{
            state.examTimerSecs--
          }
    },setNavState: (state,{payload})=>{
      switch (payload) {
        case 'OVERVIEW':
          state.navState.overview = true
          state.navState.mockExam = false
          state.navState.pastQuestion = false
          state.navState.profile = false
          state.navState.subscription = false
          break;
        case 'MOCKEXAM':
          state.navState.overview = false
          state.navState.mockExam = true
          state.navState.pastQuestion = false
          state.navState.profile = false
          state.navState.subscription = false
          break;
        case 'PASTQUESTION':
          state.navState.overview = false
          state.navState.mockExam = false
          state.navState.pastQuestion = true
          state.navState.profile = false
          state.navState.subscription = false
          break;
        case 'PROFILE':
          state.navState.overview = false
          state.navState.mockExam = false
          state.navState.pastQuestion = false
          state.navState.profile = true
          state.navState.subscription = false
          break;
        case 'SUBSCRIPTION':
          state.navState.overview = false
          state.navState.mockExam = false
          state.navState.pastQuestion = false
          state.navState.profile = false
          state.navState.subscription = true
          break;
      
        default:
          state.navState.overview = true
          state.navState.mockExam = false
          state.navState.pastQuestion = false
          state.navState.profile = false
          state.navState.subscription = false
          break;
      }
    },
    setLogout: (state,{payload})=>{
      state.logout = !state.logout
    },
    setLeavingNow: (state,{payload})=>{
      state.leavingNow = !state.leavingNow
    },
    setExam: (state, { payload }) => {
      state.exam = payload
    },
    setYear: (state, { payload }) => {
      state.year = payload
    },
  },
});

export const { setUserToken, setExam, setYear, setLogout, setLeavingNow, setNavState, theExamTimer, setUser, setMockSubject, setIsOverview, setMockExamQuestion, setMockExamOption, cancelExam, previousQuestion, nextQuestion, setExamTimer } = slice.actions;

export default slice.reducer;
