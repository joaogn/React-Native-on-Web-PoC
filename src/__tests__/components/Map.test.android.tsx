import React from 'react';
import { render } from 'react-native-testing-library';
import { Platform } from 'react-native';
import Map from '../../components/Map';

describe('Map component', () => {
  it('should able to render an Map', () => {
    const { getByTestId } = render(
      <Map
        defaultLatitude={0}
        defaultLongitude={0}
        defaultZoom={2}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        style={{ flex: 1, position: Platform.OS === 'web' ? 'absolute' : null }}
      />,
    );

    expect(getByTestId('map')).toBeTruthy();
  });
});
