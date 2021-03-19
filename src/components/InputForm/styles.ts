import styled, { css } from 'styled-components/native';

interface Props {
  hasError: boolean;
  hasFocus: boolean;
}

export const Container = styled.View<Props>`
  background: ${props => props.theme.transparentPrimary};
  border-radius: ${props => props.theme.borderRadius};
  padding: 8px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  height: 48px;

  ${props =>
    props.hasFocus &&
    css`
      border-width: 1px;
      border-color: ${props.theme.white};
      color: ${props.theme.white};
    `};

  ${props =>
    props.hasError &&
    css`
      border-width: 1px;
      border-color: ${props.theme.red};
      color: ${props.theme.red};
    `};
`;

export const TextInput = styled.TextInput<Props>`
  width: 80%;
  color: ${props => props.theme.white};
  height: 48px;
  border: none;

  ${props =>
    props.hasFocus &&
    css`
      color: ${props.theme.white};
    `};
  ${props =>
    props.hasError &&
    css`
      color: ${props.theme.red};
    `};
`;
