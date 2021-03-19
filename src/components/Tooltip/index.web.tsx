import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container } from './styles.web';
import { TooltipProps } from './types';
import { useSizeContext } from '../../contexts/SizeContext';
import TootipMobile from './TootipMobile';

const ToolTip = ({ children, ...props }: TooltipProps) => {
  const theme = useTheme();

  const { isSmallScreen } = useSizeContext();

  if (isSmallScreen) {
    return <TootipMobile {...props}>{children}</TootipMobile>;
  }

  const { title, className, backgroundColor, textColor } = props;

  return (
    <Container
      data-testid="tooltipContainerWeb"
      className={className}
      backgroundColor={backgroundColor || theme.primary}
      textColor={textColor || theme.white}
    >
      {children}
      <span data-testid="tooltipMessageContainerWeb">{title}</span>
    </Container>
  );
};

export default ToolTip;
