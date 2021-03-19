import React from 'react';
import { render } from 'react-native-testing-library';
import Maps from '../../screens/Home/components/Maps';
import validDevList from '../../__mocks__/validListOfDevs';
import validLogedUser from '../../__mocks__/validLogedUser';

describe('Map component', () => {
  it('should able to render an Map', () => {
    const { getByTestId } = render(
      <Maps devList={validDevList} user={validLogedUser} />,
    );

    expect(getByTestId('map')).toBeTruthy();
  });
});
