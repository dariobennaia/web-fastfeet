import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;

  @media (max-width: 800px) {
    width: auto;
  }
`;

export const HeaderAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 20px 0;
  width: 100%;
`;
