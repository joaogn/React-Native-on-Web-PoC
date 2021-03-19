import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import CardListScreen from '../../screensMobile/CardListScreen';
import mockValidListOfDevs from '../../__mocks__/validListOfDevs';
import ThemeProvider from '../../styles/ThemeProvider';

jest.mock('../../contexts/devsContext', () => {
  return {
    useDevsContext: () => ({
      devList: mockValidListOfDevs,
    }),
  };
});

describe('DevListWeb component', () => {
  it('should able to render an DevListWeb', () => {
    const { getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <CardListScreen />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'devListContainerMobile' };
      expect(UNSAFE_getByProps(props)).toBeTruthy();
    } else {
      expect(getByTestId('devListContainerMobile')).toBeTruthy();
    }
  });

  it('should able to render an DevListWeb', async () => {
    const { getAllByTestId, UNSAFE_getAllByProps } = render(
      <ThemeProvider>
        <CardListScreen />
      </ThemeProvider>,
    );
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'devCardAvatar' };
      expect(UNSAFE_getAllByProps(props)).toBeTruthy();
    } else {
      expect(getAllByTestId('devCardAvatar').length).toEqual(3);
    }
  });
});
