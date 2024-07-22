import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

it('renders without crashing', () => {
  render(<App />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
