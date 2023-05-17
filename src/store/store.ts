import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './slices/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
