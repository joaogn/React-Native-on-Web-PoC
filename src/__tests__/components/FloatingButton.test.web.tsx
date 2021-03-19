import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ThemeProvider from '../../styles/ThemeProvider';
import FloatingButton from '../../components/FloatingButton';

jest.mock('react-native-web-hooks', () => {
  return { useHover: jest.fn() };
});

describe('FloatingButton component', () => {
  it('should able to render an button', () => {
    const mockHandlePress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <FloatingButton handlePress={mockHandlePress} />
      </ThemeProvider>,
    );

    expect(getByTestId('floatingButton')).toBeTruthy();
  });

  it('should able press on FloatingButton', () => {
    const mockHandlePress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <FloatingButton handlePress={mockHandlePress} />
      </ThemeProvider>,
    );

    fireEvent.click(getByTestId('floatingButton'));
    expect(mockHandlePress).toHaveBeenCalled();
  });

  it('should change color on hover a button', async () => {
    const mockHandlePress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <FloatingButton handlePress={mockHandlePress} />
      </ThemeProvider>,
    );

    const floatingButton = getByTestId('floatingButton');
    fireEvent.mouseOver(floatingButton);

    await waitFor(() => {
      expect(floatingButton).toHaveStyle('background-color:#8257e6;');
    });
  });
});
