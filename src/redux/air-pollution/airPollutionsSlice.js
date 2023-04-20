import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'cd559a00a031c2d7baba09afe0b27bbb';

const baseUrl = 'http://api.openweathermap.org/data/2.5/air_pollution';

const initialState = {
  airPollutions: {},
  airpollutionsLoading: false,
  airpollutionsErros: null,
};

export const fetchAirPollutionData = createAsyncThunk('air-pollutions/fetchAirPollutionData', async (action) => {
  try {
    const { lat, lon } = action;
    const res = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await res.json();
    return {
      ...data.list[0].components,
      dt: data.list[0].dt,
      aqi: data.list[0].main.aqi,
    };
  } catch (error) {
    return error;
  }
});

export const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  extraReducers: (builder) => {
    // Fetch cities location
    builder.addCase(fetchAirPollutionData.pending, (state) => ({
      ...state, airpollutionsLoading: true,
    }));
    builder.addCase(fetchAirPollutionData.fulfilled, (state, action) => ({
      ...state,
      airpollutionsLoading: false,
      airPollutions: { ...action.payload },
    }));
    builder.addCase(fetchAirPollutionData.rejected, (state, action) => ({
      ...state,
      airpollutionsLoading: false,
      airpollutionsErros: action.payload,
    }));
  },
});

export default airPollutionSlice.reducer;
