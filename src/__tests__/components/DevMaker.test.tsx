import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import ThemeProvider from '../../styles/ThemeProvider';
import DevMaker from '../../screens/Home/components/DevMarker';

describe('DevMaker component', () => {
  it('should able to render an DevMaker', () => {
    const { getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <DevMaker link="https://avatars.githubusercontent.com/u/10895903?v=4" />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'devMakerContainer' };
      expect(UNSAFE_getByProps(props));
    } else {
      expect(getByTestId('devMakerContainer')).toBeTruthy();
    }
  });
});
