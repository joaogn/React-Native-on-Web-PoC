import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import { Platform } from 'react-native';
import AddNewUserScreen from '../../screensMobile/AddNewUserScreen';
import ThemeProvider from '../../styles/ThemeProvider';

const mockAddNewDev = jest.fn();

jest.mock('../../contexts/devsContext', () => {
  return {
    useDevsContext: () => ({
      addNewDev: mockAddNewDev,
    }),
  };
});

describe('DevListWeb component', () => {
  it('should able to render an DevListWeb', () => {
    const { getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <AddNewUserScreen />
      </ThemeProvider>,
    );

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'addNewUserContainerMobile' };
      expect(UNSAFE_getByProps(props)).toBeTruthy();
    } else {
      expect(getByTestId('addNewUserContainerMobile')).toBeTruthy();
    }
  });

  it('should able to render an DevListWeb', async () => {
    const { getByPlaceholder, getByText } = render(
      <ThemeProvider>
        <AddNewUserScreen />
      </ThemeProvider>,
    );
    const input = getByPlaceholder('type the username');
    const button = getByText('Add');

    fireEvent.changeText(input, 'joaogn');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockAddNewDev).toHaveBeenCalledWith('joaogn');
    });
  });
});
