import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
  name: 'favouritesSlice',
  initialState: {
    favs: []
  },
  reducers: {
    toggleFavourites(state, action) {
      const id = action.payload;

      if (state.favs.id) {
        delete state.favs[id];
      } else {
        state.favs.push(id);
      }
    },

    deleteAll(state) {
      state = {};
    },

    replaceAll(state, action) {
      state = action.payload;
    },
  }
})

export const { toggleFavourites, deleteAll, replaceAll } = favouritesSlice.actions

export default favouritesSlice.reducer