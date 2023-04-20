import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locations/locationsSlice';
import airPollutionReducer from './air-pollution/airPollutionsSlice';

const store = configureStore({
  reducer: {
    locations: locationReducer,
    airPollutions: airPollutionReducer,
  },
});

export default store;
