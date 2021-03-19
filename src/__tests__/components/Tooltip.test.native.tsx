import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import Tooltip from '../../components/Tooltip';
import { defaultTheme } from '../../styles/theme';

describe('Map component', () => {
  it('should able to render an Tooltip', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Tooltip title="toltip title">
          <Text>Text</Text>
        </Tooltip>
      </ThemeProvider>,
    );

    expect(getByTestId('tooltipContainerMobile')).toBeTruthy();
  });

  it('should show and close a tooltip message container when press', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Tooltip title="toltip title">
          <Text>Hover</Text>
        </Tooltip>
      </ThemeProvider>,
    );

    expect(() => getByTestId('tooltipMessageContainerMobile')).toThrow(
      /no instances found/i,
    );

    fireEvent.press(getByTestId('tooltipContainerMobile'));

    await waitFor(() => {
      expect(getByTestId('tooltipMessageContainerMobile')).toBeTruthy();
    });

    fireEvent.press(getByTestId('tooltipContainerMobile'));

    expect(() => getByTestId('tooltipMessageContainerMobile')).toThrow(
      /no instances found/i,
    );
  });
});
