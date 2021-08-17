import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ReduxProvider } from '../../state/ReduxProvider';
import { initialState, reducer } from '../../state/reducer';

describe('App component', () => {
  it('renders App and displays colors', () => {
    render(
      <ReduxProvider reducer={reducer} initialState={initialState} >
        <App />
      </ReduxProvider>);
  
    const display = screen.getByTestId('display');

    //test colorInput
    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#086A87' } });
    expect(display).toHaveStyle({ backgroundColor: '#086A87' });

    //test undo button
    const undoButton = screen.getByTestId('undoButton');
    userEvent.click(undoButton);
    expect(display).toHaveStyle({ backgroundColor: '#870887' });

    //test redo button
    const redoButton = screen.getByTestId('redoButton');
    userEvent.click(redoButton);
    expect(display).toHaveStyle({ backgroundColor: '#086A87' });
  });
});
