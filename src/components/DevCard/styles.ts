import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  max-width: 300px;
  height: 100px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Info = styled.View`
  align-items: flex-start;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-width: 0;
  border-radius: 30px;
  background: ${props => props.theme.white};
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.white};
`;

export const User = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.transparentGray};
`;
