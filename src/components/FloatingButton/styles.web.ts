import styled, { css } from 'styled-components';
import { FloatingButtonProps } from './types';

export const Container = styled.button<
  Omit<FloatingButtonProps, 'handlePress'>
>`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  position: absolute;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }
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
