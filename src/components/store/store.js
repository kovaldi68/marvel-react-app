import { configureStore } from '@reduxjs/toolkit';
import userActionsReducer  from './userActionsSlice';
import { storageMiddleware } from '../../helpers/storageMW';

export const store = configureStore({
  reducer: {
      userActions: userActionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageMiddleware)
});