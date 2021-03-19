import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section:first-child {
    width: 70%;
  }
  section:last-child {
    width: 30%;
  }
  @media (max-width: 1386px) {
    section:first-child {
      width: 60%;
    }
    section:last-child {
      width: 40%;
      padding-left: 2rem;
    }
  }
`;
