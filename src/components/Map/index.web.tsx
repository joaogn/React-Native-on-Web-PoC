import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapProps } from './types';

const TOKEN = process.env.MAPBOX_TOKEN;

interface ViewportProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map = ({
  children,
  defaultLatitude,
  defaultLongitude,
  defaultZoom,
  mapStyle,
  style,
}: MapProps) => {
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: defaultZoom,
  });
  return (
    <ReactMapGL
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      width="100%"
      height="100%"
      style={style}
      mapStyle={mapStyle}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={(nextViewport: ViewportProps) =>
        setViewport(nextViewport)
      }
    >
      {children}
    </ReactMapGL>
  );
};
export default Map;
