import React from 'react';
import { render } from '@testing-library/react';
import DevListWeb from '../../screens/Home/components/DevListWeb';
import mockValidListOfDevs from '../../__mocks__/validListOfDevs';
import ThemeProvider from '../../styles/ThemeProvider';

jest.mock('../../contexts/devsContext', () => {
  return {
    useDevsContext: () => ({
      devList: mockValidListOfDevs,
    }),
  };
});

const mockCloseFunction = jest.fn();

describe('DevListWeb component', () => {
  it('should able to render an DevListWeb', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <DevListWeb close={mockCloseFunction} />
      </ThemeProvider>,
    );

    expect(getByTestId('devListContainerWeb')).toBeTruthy();
  });

  it('should able to render an DevListWeb', async () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <DevListWeb close={mockCloseFunction} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('devCardAvatar').length).toEqual(3);
  });
});
