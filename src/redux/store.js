// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import quizReducer from './counterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, quizReducer);

const store = configureStore({
  reducer: {
    quiz: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
