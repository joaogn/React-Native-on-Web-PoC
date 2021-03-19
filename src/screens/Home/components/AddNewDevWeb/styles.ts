import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  top: calc(50% - 200px);
  left: calc(50% - 150px);

  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: ${props => props.theme.borderRadius};
  flex-direction: column;

  section:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    width: 100%;
    display: flex;
    padding: 10px;
    height: 50px;
    border-width: 3px;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
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
      background: transparent;
      svg {
        cursor: pointer;
        fill: ${props => props.theme.white};
      }
      border: none;
    }
  }
  section:last-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
