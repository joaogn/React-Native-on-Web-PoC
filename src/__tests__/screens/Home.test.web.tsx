import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeProvider from '../../styles/ThemeProvider';
import Home from '../../screens/Home';
import mockValidListOfDevs from '../../__mocks__/validListOfDevs';

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
        isSmallScreen: true,
      })
      .mockReturnValue({
        isSmallScreen: false,
      }),
  };
});

jest.mock('../../contexts/devsContext', () => {
  return {
    useDevsContext: () => ({
      devList: mockValidListOfDevs,
    }),
  };
});

describe('Home screen', () => {
  it('should able to render Home Mobile Screen when isSmallScreen is true', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    expect(getByTestId('homeContainerMobile')).toBeTruthy();
  });

  it('should able to render Home Screen', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    expect(getByTestId('homeContainerWeb')).toBeTruthy();
  });

  it('should able to open Devlopers list', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    fireEvent.click(getByTestId('openDeveloperButton'));

    expect(getByTestId('devListContainerWeb')).toBeTruthy();
  });

  it('should able to open Devlopers list', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    fireEvent.click(getByTestId('openAddNewDevButton'));

    expect(getByTestId('addNewDevContainerWeb')).toBeTruthy();
  });
});
