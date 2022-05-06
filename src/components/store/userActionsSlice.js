import { createSlice } from '@reduxjs/toolkit';
import storage from '../../helpers/storage';

const initialUserState = {
  user: {
    email: null,
    password: null,
    searchHistory: [],
    favs: []
  },
  isLogin: false
}

const userActionsSlice = createSlice({
  name: 'userData',
  initialState: initialUserState,
  reducers: {
    signin(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },

    signup(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },

    logout(state) {
      state.isLogin = false;
      state = initialUserState;
    },

    updateUser(state, action) {
      storage.updateUser(action.payload);
      state.user = action.payload;
    },

    toggleFavourites(state, action) {
      const id = action.payload;

      if (state.user.favs.includes(id)) {
        state.user.favs.splice(state.user.favs.indexOf(id), 1);
      } else {
        state.user.favs.push(id);
      }

      storage.updateUser({...state.user});
    },

    deleteAllFavs(state) {
      state.user.favs = [];
    },

    addQuery(state, action) {
      const queryText = action.payload;

      if (!state.user.searchHistory.includes(queryText)) {
        state.user.searchHistory.unshift(action.payload);
      }
    },

    deleteAllQueries(state) {
      state.user.searchHistory = [];
    }
  },
});

export const { signin, signup, logout, updateUser, toggleFavourites, deleteAllFavs, addQuery, deleteAllQueries} = userActionsSlice.actions;

export default userActionsSlice.reducer;