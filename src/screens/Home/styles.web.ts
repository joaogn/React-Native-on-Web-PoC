import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;

  section {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1 {
      font-size: 40px;
    }
    button {
      display: flex;
      justify-content: center;
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.white};
      align-items: center;
      height: 40px;
      width: 40px;
      border: none;
      font-size: 30px;
      border-radius: 8px;
      margin-right: 10px;
      margin-left: 10px;
      &:hover {
        background-color: ${props => props.theme.primaryHover};
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
