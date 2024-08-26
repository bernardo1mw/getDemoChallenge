import { configureStore } from '@reduxjs/toolkit';
import demoReducer from '../features/demoSlice';
import frameReducer from '../features/frameSlice';

const store = configureStore({
  reducer: {
    demo: demoReducer,
    frame: frameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
