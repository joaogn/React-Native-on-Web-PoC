import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import ThemeProvider from '../../styles/ThemeProvider';
import DevCard from '../../components/DevCard';

jest.mock('react-native-web-hooks', () => {
  return { useHover: jest.fn() };
});

describe('DevCard component', () => {
  it('should able to render an DevCard', () => {
    const { getByText, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <DevCard
          avatar_url="https://avatars.githubusercontent.com/u/10895903?v=4"
          name="João Graça Neto"
          user="joaogn"
        />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'devCardAvatar' };
      expect(UNSAFE_getByProps(props));
    } else {
      expect(getByTestId('devCardAvatar')).toBeTruthy();
    }

    expect(getByText('João Graça Neto')).toBeTruthy();
    expect(getByText('joaogn')).toBeTruthy();
  });
});
