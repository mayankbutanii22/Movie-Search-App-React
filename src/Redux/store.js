import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import uiReducer from './uiSlice';


export default configureStore({
reducer: {
movies: moviesReducer,
ui: uiReducer,
}
});