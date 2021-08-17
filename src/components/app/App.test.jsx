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
    //test undo button
    const undoButton = screen.getByTestId('undoButton');
    userEvent.click(undoButton);
    expect(display).toHaveStyle({ backgroundColor: '#086A87' });
 
    //test redo button
    const redoButton = screen.getByTestId('redoButton');
    userEvent.click(redoButton);
    expect(display).toHaveStyle({ backgroundColor: '#ffccff' });
  });
});
