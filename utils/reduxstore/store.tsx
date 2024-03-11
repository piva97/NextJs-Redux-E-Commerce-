'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

// Create the store instance
const store = configureStore({
  reducer: {
    cart: cartSlice // Accessing the reducer from the cartSlice slice object
  },
});

// Export the store instance
export default store;

// Infer the type of makeStore

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
