import { createSlice } from '@reduxjs/toolkit'

export const searchHistorySlice = createSlice({
  name: 'searchHistorySlice',
  initialState: {
    searchQueries: []
  },
  reducers: {
    deleteAll(state) {
      state.searchQueries = [];
    },

    add(state, action) {
      state.searchQueries.unshift(action.payload);
    },

    replaceAll(state, action) {
      state.searchQueries = action.payload;
    },
  }
})

export const { deleteAll, add, replaceAll } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;