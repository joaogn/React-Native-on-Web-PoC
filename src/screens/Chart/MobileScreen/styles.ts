import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  top: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
`;

export const ListButton = styled.TouchableOpacity`
  top: 80px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
`;
