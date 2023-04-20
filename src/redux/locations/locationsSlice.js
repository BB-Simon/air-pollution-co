import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'cd559a00a031c2d7baba09afe0b27bbb';

const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';

const initialState = {
  locations: [],
  locationLoading: false,
  locationsErros: null,
};

export const fetchLocationsData = createAsyncThunk('locations/fetchLocationsData', async () => {
  try {
    const cities = ['Kyoto', 'Dhaka', 'Shanghai', 'Tokyo', 'Kathmandu', 'Makka'];
    const req = cities.map(async (city) => {
      const res = await fetch(`${baseUrl}?q=${city}&limit=${1}&appid=${apiKey}`);
      return res.json();
    });
    return Promise.all(req);
  } catch (error) {
    return error;
  }
});

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  extraReducers: (builder) => {
    // Fetch cities location
    builder.addCase(fetchLocationsData.pending, (state) => ({ ...state, locationsLoading: true }));
    builder.addCase(fetchLocationsData.fulfilled, (state, action) => {
      const cities = action.payload.map((p) => ({
        country: p[0]?.country,
        lat: p[0].lat,
        lon: p[0].lon,
        name: p[0].name,
        state: p[0].state,
      }));
      return {
        ...state,
        locationsLoading: false,
        locations: [...cities],
      };
    });
    builder.addCase(fetchLocationsData.rejected, (state, action) => ({
      ...state,
      locationsLoading: false,
      locationError: action.payload,
    }));
  },
});

export default locationSlice.reducer;
