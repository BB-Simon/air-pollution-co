import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../components/Home';

const mockStore = configureMockStore([]);

const store = mockStore({
  locations: {
    locations: [
      {
        country: 'BD',
        lat: 23.7644025,
        lon: 90.389015,
        name: 'Dhaka',
        state: 'Dhaka Division',
      },
      {
        country: 'SA',
        lat: 21.420847,
        lon: 39.826869,
        name: 'Makkah Al Mukarramah',
        state: 'Makkah Region',
      },
    ],
    locationLoading: false,
    locationsErros: null,
  },
});

describe('Home page', () => {
  test('Renders Home component correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/Dhaka/i)).toBeInTheDocument();
    expect(screen.getByText(/Makkah Al Mukarramah/i)).toBeInTheDocument();
  });
});
