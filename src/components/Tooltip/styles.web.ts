import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  textColor: string;
}

export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 160px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: 8px;
    border-radius: ${props => props.theme.borderRadius};
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: ${props => props.backgroundColor} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
  }
`;
