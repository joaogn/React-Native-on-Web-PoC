import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ThemeProvider from '../../styles/ThemeProvider';
import FloatingButton from '../../components/FloatingButton';

jest.mock('react-native-web-hooks', () => {
  return { useHover: jest.fn() };
});

describe('FloatingButton component', () => {
  it('should able to render an FloatingButton', () => {
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

    fireEvent.press(getByTestId('floatingButton'));
    expect(mockHandlePress).toHaveBeenCalled();
  });
});
