import { ReactNode } from 'react';

export interface MapProps {
  children?: ReactNode;
  defaultLatitude: number;
  defaultLongitude: number;
  defaultZoom: number;
  mapStyle?: string;
  style?: any;
}
