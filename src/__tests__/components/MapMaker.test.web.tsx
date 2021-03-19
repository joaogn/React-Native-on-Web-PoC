import React from 'react';
import { render } from '@testing-library/react';
import { _MapContext as MapContext } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';
import MapMaker from '../../components/MapMaker';

const mockStaticContext = {
  viewport: new WebMercatorViewport({
    width: 800,
    height: 600,
    latitude: -37.81482,
    longitude: 144.96679,
    zoom: 14,
  }),
  map: null,
  container: null,
  isDragging: false,
  eventManager: null,
};

describe('Map component', () => {
  it('should able to render an MapMaker', () => {
    const { getByText } = render(
      <MapContext.Provider value={mockStaticContext}>
        <MapMaker latitude={37} longitude={-122} id="a">
          <div>hello</div>
        </MapMaker>
      </MapContext.Provider>,
    );

    expect(getByText('hello')).toBeTruthy();
  });
});
