/* eslint-disable camelcase */
import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import ThemeProvider from '../../styles/ThemeProvider';
import UserMaker from '../../screens/Home/components/UserMaker';

describe('UserMaker component', () => {
  it('should able to render an UserMaker', () => {
    const { getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <UserMaker link="https://avatars.githubusercontent.com/u/10895903?v=4" />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'userMakerContainer' };
      expect(UNSAFE_getByProps(props));
    } else {
      expect(getByTestId('userMakerContainer')).toBeTruthy();
    }
  });
});
