// src/store.js
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './store/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;