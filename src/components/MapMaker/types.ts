import { ReactNode } from 'react';

export interface MapMakerProps {
  children: ReactNode;
  latitude: number;
  longitude: number;
  id: string;
}
