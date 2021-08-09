import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './feature/selectCountry/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
