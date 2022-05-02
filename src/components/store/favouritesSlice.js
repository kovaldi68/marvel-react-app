import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
  name: 'favouritesSlice',
  initialState: {
    favs: []
  },
  reducers: {
    toggleFavourites(state, action) {
      const id = action.payload;

      if (state.favs.includes(id)) {
        state.favs.splice(state.favs.indexOf(id), 1);
      } else {
        state.favs.push(id);
      }
    },

    deleteAll(state) {
      state.favs = [];
    },
  }
})

export const { toggleFavourites, deleteAll } = favouritesSlice.actions

export default favouritesSlice.reducer