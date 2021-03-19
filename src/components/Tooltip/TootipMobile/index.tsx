/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Container, Title, Delta, TooltipContainer } from './styles';
import { TooltipProps } from '../types';

const Tooltip = ({
  children,
  title,
  style,
  backgroundColor,
  textColor,
}: TooltipProps) => {
  const [isShow, setIsShow] = useState(false);
  const theme = useTheme();
  return (
    <Container
      testID="tooltipContainerMobile"
      style={style}
      onPress={() => setIsShow(oldState => !oldState)}
    >
      {children}
      {isShow && (
        <TooltipContainer
          testID="tooltipMessageContainerMobile"
          backgroundColor={backgroundColor || theme.primary}
          textColor={textColor || theme.white}
        >
          <Title
            backgroundColor={backgroundColor || theme.primary}
            textColor={textColor || theme.white}
          >
            {title}
          </Title>
          <Delta
            backgroundColor={backgroundColor || theme.primary}
            textColor={textColor || theme.white}
          />
        </TooltipContainer>
      )}
    </Container>
  );
};

export default Tooltip;
