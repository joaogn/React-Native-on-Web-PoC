import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../styles/ThemeProvider';
import Tooltip from '../../components/Tooltip';

jest.mock('../../contexts/SizeContext', () => {
  return {
    useSizeContext: jest.fn().mockReturnValue({
      isSmallScreen: false,
    }),
  };
});

describe('Map component', () => {
  it('should able to render an Tooltip', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Tooltip title="toltip title">
          <p>Text</p>
        </Tooltip>
      </ThemeProvider>,
    );

    expect(getByTestId('tooltipContainerWeb')).toBeTruthy();
  });
});
