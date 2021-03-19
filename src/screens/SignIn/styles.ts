import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const LeftSide = styled.View`
  flex: 1;
  min-width: 60%;
  justify-content: center;
  align-items: center;
`;

export const RigthSide = styled.View`
  flex: 1;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
