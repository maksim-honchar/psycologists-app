import { configureStore } from '@reduxjs/toolkit';
import specialistsReducer from './specialistsSlice';

export const store = configureStore({
  reducer: {
    specialists: specialistsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
