import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LocationCard from '../components/LocationCard';

const location = {
  country: 'BD',
  lat: 892346980,
  lon: -723462783462,
  name: 'Dhaka',
  state: 'Dhaka',
};

describe('Location Card', () => {
  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <LocationCard location={location} />
      </BrowserRouter>,
    );
    const ele1 = screen.getByText(/Dhaka/i);
    expect(ele1).toBeInTheDocument();
    const ele2 = screen.getByText(/892346980/i);
    expect(ele2).toBeInTheDocument();
  });
});
