import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled(PerfectScrollbar)`
  width: 30%;
  max-width: 380px;
  position: absolute;
  height: 95%;
  max-height: 95%;
  top: 2%;
  left: 2%;

  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  flex-direction: column;
  section {
    width: 100%;
    display: flex;
    padding: 10px;
    height: 50px;
    border-width: 3px;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 24px;
    }
    button {
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      svg {
        cursor: pointer;
        fill: ${props => props.theme.white};
      }
      border: none;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
