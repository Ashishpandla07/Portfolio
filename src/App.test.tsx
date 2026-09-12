import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './components/Main';

test('renders education and credentials section', () => {
  render(<App />);
  const caHeading = screen.getByText(/Chartered Accountant \(CA\)/i);
  expect(caHeading).toBeInTheDocument();
});

test('renders mobile profile photo in Main component', () => {
  render(<Main />);
  const photo = screen.getByAltText(/CA Ashish Pandla/i);
  expect(photo).toBeInTheDocument();
  expect(photo.closest('.mobile-profile-photo')).toBeInTheDocument();
});
