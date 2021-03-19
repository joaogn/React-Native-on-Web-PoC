import styled from 'styled-components/native';

interface ContainerProps {
  isHovered: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.isHovered ? props.theme.primaryHover : props.theme.primary};
  height: 48px;
  border-radius: ${props => props.theme.borderRadius};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.white};
`;
