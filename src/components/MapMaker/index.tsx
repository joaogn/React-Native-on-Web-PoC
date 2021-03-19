import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { MapMakerProps } from './types';

const Map = ({ children, id, longitude, latitude }: MapMakerProps) => {
  return (
    <MapboxGL.MarkerView id={id} coordinate={[longitude, latitude]}>
      {children}
    </MapboxGL.MarkerView>
  );
};
export default Map;
