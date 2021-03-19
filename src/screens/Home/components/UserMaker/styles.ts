import styled from 'styled-components/native';

export const Container = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.background};
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-width: 0;
  border-radius: 20px;
  background: ${props => props.theme.background};
  border-color: ${props => props.theme.golden};
  border-width: 2px;
`;
