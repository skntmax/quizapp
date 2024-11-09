import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  sessionId: null,
  dialog: true,
  activeStep: 0,
  correct: 0,
  incorrect: 0,
  remaining: 0,
  processPercentage: 0,
  pagination_loder: false,
  more_cat_loder: false,
  difficulty_level: {
    pn: 1,
    itemsPerPage: 10,
    data: undefined,
    _id: undefined
  },
  categories: {
    pn: 1,
    itemsPerPage: 10,
    data: undefined
  },
  questions_list: {
    pn: 1,
    total: undefined,
    itemsPerPage: 10,
    quizCat: undefined,
    data: undefined,
  },
  quizSessionDetails: {
    _id: undefined,
    CREATED_ON: undefined,
    QUIZ_TIMESPAN: undefined,
  },
  userResponse: []
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    setProgressPercentage: (state, action) => {
      state.processPercentage = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    incrementCorrect: (state, action) => {
      state.correct = action.payload ? state.correct + 1 : state.correct
    },
    setCorrect: (state, action) => {
      state.correct = action.payload;
    },
    incrementIncorrect: (state, action) => {
      state.incorrect = action.payload ? state.incorrect + 1 : state.incorrect;
    },
    setIncorrect: (state, action) => {
      state.incorrect = action.payload;;
    },
    setRemaining: (state) => {
      state.remaining = state.remaining - 1;
    },
    setRemainingTotal: (state, action) => {
      state.remaining = action.payload;
    },
    setPaginationLoader: (state, action) => {
      state.pagination_loder = action.payload;
    },
    setMoreCatLoader: (state, action) => {
      state.more_cat_loder = action.payload;
    },
    setDifficultyLevel: (state, action) => {
      state.difficulty_level = { ...state.difficulty_level, ...action.payload };
    },
    setCategories: (state, action) => {
      state.categories = { ...state.categories, ...action.payload };
    },
    setQuestionsList: (state, action) => {
      state.questions_list = { ...state.questions_list, ...action.payload };
    },
    resetQuiz: () => initialState,

    updateAllData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setQuizSessionDetails: (state, action) => {
      state.quizSessionDetails = { ...state.quizSessionDetails, ...action.payload };
    },
    setUserResponseData: (state, action) => {
      state.userResponse = [...state.userResponse, action.payload]
    },
    setUserResumeResponseData: (state, action) => {
      state.userResponse = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setSessionId,
  setDialog,
  setActiveStep,
  incrementCorrect,
  incrementIncorrect,
  setRemaining,
  updateAllData,
  setPaginationLoader,
  setMoreCatLoader,
  setDifficultyLevel,
  setCategories,
  setRemainingTotal,
  setQuestionsList,
  resetQuiz,
  setUserResponseData,
  setQuizSessionDetails,
  setProgressPercentage,
  setCorrect,
  setIncorrect,
  setUserResumeResponseData
} = quizSlice.actions;

export default quizSlice.reducer;
