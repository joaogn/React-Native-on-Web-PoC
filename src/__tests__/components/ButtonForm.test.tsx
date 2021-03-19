import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ThemeProvider from '../../styles/ThemeProvider';
import ButtonForm from '../../components/ButtonForm';

jest.mock('react-native-web-hooks', () => {
  return { useHover: jest.fn() };
});

describe('InputForm component', () => {
  it('should able to render an button', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ButtonForm>Press me</ButtonForm>
      </ThemeProvider>,
    );

    expect(getByText('Press me')).toBeTruthy();
  });

  it('should able click on button', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <ButtonForm onPress={onPressMock}>Press me</ButtonForm>
      </ThemeProvider>,
    );

    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
