import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddNewDevWeb from '../../screens/Home/components/AddNewDevWeb';
import ThemeProvider from '../../styles/ThemeProvider';

const mockAddNewDev = jest.fn();

jest.mock('../../contexts/devsContext', () => {
  return {
    useDevsContext: () => ({
      addNewDev: mockAddNewDev,
    }),
  };
});

const mockCloseFunction = jest.fn();

describe('DevListWeb component', () => {
  it('should able to render an DevListWeb', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <AddNewDevWeb close={mockCloseFunction} />
      </ThemeProvider>,
    );

    expect(getByTestId('addNewDevContainerWeb')).toBeTruthy();
  });

  it('should able to render an DevListWeb', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider>
        <AddNewDevWeb close={mockCloseFunction} />
      </ThemeProvider>,
    );
    const input = getByPlaceholderText('type the username');
    const button = getByText('Add');

    fireEvent.change(input, { target: { value: 'joaogn' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockAddNewDev).toHaveBeenCalledWith('joaogn');
    });
  });
});
