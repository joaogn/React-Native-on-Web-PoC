import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import { Platform } from 'react-native';
import ThemeProvider from '../../styles/ThemeProvider';
import SignIn from '../../screens/SignIn';

const mockedSignIn = jest.fn();

jest.mock('../../contexts/AuthContext', () => {
  return {
    useAuthContext: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('SignIn Screen', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
  });

  it('should able to sign in', async () => {
    const { getByPlaceholder, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <SignIn />
      </ThemeProvider>,
    );

    const loginField = getByPlaceholder('type your username');

    // workaround for https://github.com/callstack/react-native-testing-library/pull/407
    let loginButton: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'loginButton' };
      loginButton = UNSAFE_getByProps(props);
    } else {
      loginButton = getByTestId('loginButton');
    }

    fireEvent.changeText(loginField, 'joaogn');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalledWith({ userName: 'joaogn' });
    });
  });

  it('should not able to sign in with invalid validation and show tooltip', async () => {
    const { getByPlaceholder, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <SignIn />
      </ThemeProvider>,
    );

    const loginField = getByPlaceholder('type your username');
    let loginButton: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'loginButton' };
      loginButton = UNSAFE_getByProps(props);
    } else {
      loginButton = getByTestId('loginButton');
    }

    fireEvent.changeText(loginField, 'j');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedSignIn).not.toHaveBeenCalled();
    });
    let tooltipComponent: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'tooltipContainerWeb' };
      tooltipComponent = UNSAFE_getByProps(props);
    } else {
      tooltipComponent = getByTestId('tooltipContainerMobile');
    }

    expect(tooltipComponent).toBeTruthy();
  });
});
