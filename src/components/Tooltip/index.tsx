import React from 'react';
import TootipMobile from './TootipMobile';
import { TooltipProps } from './types';

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <TootipMobile {...props}>{children}</TootipMobile>;
};

export default Tooltip;
