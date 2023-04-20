import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'cd559a00a031c2d7baba09afe0b27bbb';
const baseUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';

const initialState = {
  airPollutions: {},
  airpollutionsLoading: false,
  airpollutionsErros: null,
};

export const fetchAirPollutionData = createAsyncThunk('air-pollutions/fetchAirPollutionData', async (action) => {
  try {
    const { lat, lon } = action;
    const res = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return res.json();
  } catch (error) {
    return error;
  }
});

export const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  extraReducers: (builder) => {
    // Fetch metrics
    builder.addCase(fetchAirPollutionData.pending, (state) => ({
      ...state, airpollutionsLoading: true,
    }));
    builder.addCase(fetchAirPollutionData.fulfilled, (state, action) => {
      const data = action.payload.list;
      const metrics = {
        ...data[0].components,
        dt: data[0]?.dt,
        aqi: data[0].main?.aqi,
      };

      return {
        ...state,
        airpollutionsLoading: false,
        airPollutions: { ...metrics },
      };
    });
    builder.addCase(fetchAirPollutionData.rejected, (state, action) => ({
      ...state,
      airpollutionsLoading: false,
      airpollutionsErros: action.payload,
    }));
  },
});

export default airPollutionSlice.reducer;
