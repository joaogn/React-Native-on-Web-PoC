import React from 'react';
import { FloatingButtonProps } from './types';
import { Container } from './styles.web';

const FloatingButton = ({
  top,
  right,
  bottom,
  left,
  handlePress,
  children,
}: FloatingButtonProps) => {
  return (
    <Container
      data-testid="floatingButton"
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      onClick={handlePress}
    >
      {children}
    </Container>
  );
};

export default FloatingButton;
