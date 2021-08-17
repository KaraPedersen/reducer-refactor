import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders App and displays colors', () => {
    render(<App />);

    const display = screen.getByTestId('display');

    //test colorInput
    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#ffccff' } });
    expect(display).toHaveStyle({ backgroundColor: '#ffccff' });
  });
});
