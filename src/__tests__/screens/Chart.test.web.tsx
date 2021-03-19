import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../styles/ThemeProvider';
import Chart from '../../screens/Chart';

const mockedNavigate = jest.fn();
const mockedRoute = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      route: mockedRoute,
    }),
  };
});

jest.mock('../../contexts/SizeContext', () => {
  return {
    useSizeContext: jest
      .fn()
      .mockReturnValueOnce({
        isSmallScreen: false,
      })
      .mockReturnValueOnce({
        isSmallScreen: true,
      }),
  };
});

describe('Char screen', () => {
  it('should able to render Chat Screen', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Chart />
      </ThemeProvider>,
    );
    expect(getByTestId('chartContainerWeb')).toBeTruthy();
  });
  it('should able to render Chart Mobile Screen when isSmallScreen is true', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Chart />
      </ThemeProvider>,
    );
    expect(getByTestId('chartContainer')).toBeTruthy();
  });
});
