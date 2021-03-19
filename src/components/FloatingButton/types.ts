import { ReactNode } from 'react';

export interface FloatingButtonProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  children?: ReactNode;
  handlePress: () => void;
}
