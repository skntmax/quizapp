import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    sessionId: null,
    dialog: true,
    activeStep: 0,
    correct: 0,
    incorrect: 0,
    remaining: 0,
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
    }
  },
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    incrementCorrect: (state) => {
      state.correct += 1;
    },
    incrementIncorrect: (state) => {
      state.incorrect += 1;
    },
    setRemaining: (state, action) => {
      state.remaining = action.payload;
    },
    setPaginationLoader: (state, action) => {
      state.pagination_loder = action.payload;
    },
    setMoreCatLoader: (state, action) => {
      state.more_cat_loder = action.payload;
    },
    setDifficultyLevel: (state, action) => {
      debugger
      state.difficulty_level = { ...state.difficulty_level, ...action.payload };
    },
    setCategories: (state, action) => {
      state.categories = { ...state.categories, ...action.payload };
    },
    setQuestionsList: (state, action) => {
      state.questions_list = { ...state.questions_list, ...action.payload };
    },
    resetQuiz: (state) => {
      state.sessionId = null;
      state.dialog = true;
      state.activeStep = 0;
      state.correct = 0;
      state.incorrect = 0;
      state.remaining = 0;
      state.pagination_loder = false;
      state.more_cat_loder = false;
      state.difficulty_level = {
        pn: 1,
        itemsPerPage: 10,
        data: undefined,
        _id: undefined
      };
      state.categories = {
        pn: 1,
        itemsPerPage: 10,
        data: undefined
      };
      state.questions_list = {
        pn: 1,
        total: undefined,
        itemsPerPage: 10,
        quizCat: undefined,
        data: undefined,
      };
    },
    updateAllData: (state, action) => {
      return { ...state, ...action.payload };
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
  setQuestionsList,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
