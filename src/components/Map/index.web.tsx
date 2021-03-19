/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { MapProps } from './types';

(mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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
