import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-store';
import someReducer from './some-store';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    some: someReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
