import styled, { css } from 'styled-components/native';
import { FloatingButtonProps } from './types';

export const Container = styled.TouchableOpacity<
  Omit<FloatingButtonProps, 'handlePress'>
>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
  ${props =>
    props.top &&
    css`
      top: ${props.top}px;
    `};
  ${props =>
    props.right &&
    css`
      right: ${props.right}px;
    `}
  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom}px;
    `};
  ${props =>
    props.left &&
    css`
      left: ${props.left}px;
    `};
`;
