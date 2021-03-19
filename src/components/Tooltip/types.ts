import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TooltipProps {
  className?: string;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  title: string;
  backgroundColor?: string;
  textColor?: string;
}
