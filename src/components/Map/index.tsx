import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { MapProps } from './types';

const TOKEN = process.env.MAPBOX_TOKEN;

const Map = ({
  children,
  defaultLatitude,
  defaultLongitude,
  defaultZoom,
  mapStyle,
  style,
}: MapProps) => {
  useEffect(() => {
    MapboxGL.setAccessToken(TOKEN ?? '');
    if (Platform.OS === 'android') {
      MapboxGL.setConnected(true);
    }
  }, []);
  return (
    <MapboxGL.MapView testID="map" style={style} styleURL={mapStyle}>
      <MapboxGL.Camera
        centerCoordinate={[defaultLongitude, defaultLatitude]}
        zoomLevel={defaultZoom}
      />
      {children}
    </MapboxGL.MapView>
  );
};
export default Map;
