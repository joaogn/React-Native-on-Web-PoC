import React, { useRef } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useHover } from 'react-native-web-hooks';
import { Container, ButtonText } from './styles';

interface Props extends TouchableOpacityProps {
  children: string;
}

const ButtonForm = ({ children, ...props }: Props) => {
  const ref = useRef(null);
  const isHovered = useHover(ref);

  return (
    <Container {...props} ref={ref} isHovered={isHovered}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default ButtonForm;
