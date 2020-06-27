import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;
