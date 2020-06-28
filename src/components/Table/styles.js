import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    overflow-x: scroll;
  }
`;

export const Thead = styled.ul`
  display: grid;
  width: 1200px;
  grid-template-columns: repeat(${(props) => props.quantity}, 1fr);
  grid-gap: 15px;
  padding: 20px;

  li {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
  }

  li:nth-last-child(-n + 1) {
    text-align: right;
  }
`;

export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;

  ul {
    display: grid;
    grid-template-columns: repeat(${(props) => props.quantity}, 1fr);
    grid-gap: 20px;
    padding: 0 20px;
    background: #ffffff;
    align-items: center;
    height: 57px;

    & + ul {
      margin-top: 15px;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #666666;
    }

    li:nth-last-child(-n + 1) {
      justify-content: flex-end;
    }
  }
`;

export const NoRegisters = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  align-items: center;
  height: 57px;
  font-weight: bold;
  color: #666666;
`;
