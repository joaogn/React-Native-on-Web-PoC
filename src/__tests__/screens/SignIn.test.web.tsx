import React from 'react';
import { render, waitFor } from 'react-native-testing-library';
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

describe('SignIn Screen', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
  });

  it('should render a login web image if smallScreen is false', async () => {
    const { UNSAFE_getByProps } = render(
      <ThemeProvider>
        <SignIn />
      </ThemeProvider>,
    );

    const props = { 'data-testid': 'loginImage' };

    expect(UNSAFE_getByProps(props)).toBeTruthy();
  });

  it('should not render a login web image if smallScreen is true', async () => {
    const { UNSAFE_getByProps } = render(
      <ThemeProvider>
        <SignIn />
      </ThemeProvider>,
    );

    const props = { 'data-testid': 'loginImage' };
    waitFor(() => {
      expect(UNSAFE_getByProps(props)).toThrow();
    });
  });
});
