import React from 'react';
import { render } from '@testing-library/react';
import Maps from '../../screens/Home/components/Maps';
import validDevList from '../../__mocks__/validListOfDevs';
import validLogedUser from '../../__mocks__/validLogedUser';

describe('Map component', () => {
  it('should able to render an Map', () => {
    const result = render(
      <Maps devList={validDevList} user={validLogedUser} />,
    );

    expect(result).toBeTruthy();
  });
});
