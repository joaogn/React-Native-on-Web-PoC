import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ThemeProvider from '../../styles/ThemeProvider';
import Home from '../../screens/Home';
import mockValidListOfDevs from '../../__mocks__/validListOfDevs';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const mockedSignOut = jest.fn();

jest.mock('../../contexts/AuthContext', () => {
  return {
    useAuthContext: () => ({
      signOut: mockedSignOut,
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

describe('Chart screen', () => {
  it('should able to render Home Screen', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    expect(getByTestId('homeContainerMobile')).toBeTruthy();
  });

  it('should able sign out on click on signOut button', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('signOutButton'));

    expect(mockedSignOut).toHaveBeenCalled();
  });

  it('should able a mobile developer list page on click on DevList button', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('openDevListMobile'));

    expect(mockedNavigate).toHaveBeenCalledWith('DevList');
  });

  it('should able a mobile addNewDev page on click on addNewDev button', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('openAddNewUserMobile'));

    expect(mockedNavigate).toHaveBeenCalledWith('DevList');
  });
});
