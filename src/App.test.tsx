import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders education and credentials section', () => {
  render(<App />);
  const caHeading = screen.getByText(/Chartered Accountant \(CA\)/i);
  expect(caHeading).toBeInTheDocument();
});
