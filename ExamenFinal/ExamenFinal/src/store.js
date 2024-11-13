import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './store/todoSlice';
import pokemonReducer from './store/pokemonSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    pokemon: pokemonReducer,
  }
});

export default store;
