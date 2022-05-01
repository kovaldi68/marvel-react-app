import { configureStore } from '@reduxjs/toolkit';
import searchHistoryReducer from './searchHistorySlice';
import favouritesReducer from './favouritesSlice';

export default configureStore({
    reducer: {
        searchHistory: searchHistoryReducer,
        favourites: favouritesReducer,
      },
})