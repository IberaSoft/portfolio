<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 1dc4d6b9ffb8875a511ee17bc61aee82d4e04301
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
