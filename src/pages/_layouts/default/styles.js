import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
