import React from 'react';
import { FloatingButtonProps } from './types';
import { Container } from './styles';

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
      testID="floatingButton"
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      onPress={handlePress}
    >
      {children}
    </Container>
  );
};

export default FloatingButton;
