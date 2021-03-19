import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import ThemeProvider from '../../styles/ThemeProvider';
import Image from '../../components/Image';
import LogoImg from '../../assets/logo.png';

describe('Image component', () => {
  it('should able to render an Image', () => {
    const { getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <Image source={LogoImg} />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'image' };
      expect(UNSAFE_getByProps(props));
    } else {
      expect(getByTestId('image')).toBeTruthy();
    }
  });
});
