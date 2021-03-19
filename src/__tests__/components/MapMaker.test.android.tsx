import React from 'react';
import { render } from 'react-native-testing-library';
import { Text } from 'react-native';
import MapMaker from '../../components/MapMaker';

describe('Map component', () => {
  it('should able to render an Map', () => {
    const { UNSAFE_getByProps, getByText } = render(
      <MapMaker latitude={0} longitude={0} id="mapMaker">
        <Text>Maker</Text>
      </MapMaker>,
    );

    const props = { id: 'mapMaker' };
    expect(UNSAFE_getByProps(props)).toBeTruthy();
    expect(getByText('Maker')).toBeTruthy();
  });
});
