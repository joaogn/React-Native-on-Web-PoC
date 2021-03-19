import React from 'react';
import { render } from 'react-native-testing-library';
import ThemeProvider from '../../styles/ThemeProvider';
import Chart from '../../screens/Chart';

describe('Chart screen', () => {
  it('should able to render Chat Screen', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Chart />
      </ThemeProvider>,
    );
    expect(getByTestId('chartContainer')).toBeTruthy();
  });
});
