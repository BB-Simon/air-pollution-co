import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const logoEle = screen.getByText(/2023/i);
    expect(logoEle).toBeInTheDocument();
  });
});
