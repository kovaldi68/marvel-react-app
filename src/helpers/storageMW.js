import storage from './storage';

export const storageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'userData/signin') {
    const user = storage.getUser(action.payload.userMail, action.payload.userPassw);
    action.payload = user;
    return next(action);
  }

  if (action.type === 'userData/signup') {
    storage.setUser(action.payload);
  }

  return next(action);
};