import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  position: relative;
`;

interface Props {
  backgroundColor: string;
  textColor: string;
}

export const TooltipContainer = styled.View<Props>`
  position: absolute;
  bottom: 32px;
  width: 160px;
  background-color: ${props => props.backgroundColor};
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};
`;

export const Title = styled.Text<Props>`
  padding: 8px;
  color: ${props => props.textColor};
`;

export const Delta = styled.View<Props>`
  position: absolute;
  top: 32px;
  width: 0px;
  height: 0px;

  background-color: transparent;
  border-style: solid;

  border-top-width: 6px;
  border-right-width: 6px;
  border-bottom-width: 0;
  border-left-width: 6px;

  border-top-color: ${props => props.backgroundColor};
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
`;
