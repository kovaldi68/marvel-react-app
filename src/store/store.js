import { configureStore } from '@reduxjs/toolkit';
import userActionsReducer  from './userActionsSlice';
import { storageMw } from '../middleware/storageMw';

export const store = configureStore({
  reducer: {
      userActions: userActionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageMw)
});