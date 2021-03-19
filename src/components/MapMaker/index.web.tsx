import React from 'react';
import { Marker } from 'react-map-gl';
import { MapMakerProps } from './types';

const Map = ({ children, longitude, latitude }: MapMakerProps) => {
  return (
    <Marker data-testid="maker" latitude={latitude} longitude={longitude}>
      {children}
    </Marker>
  );
};
export default Map;
