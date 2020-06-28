import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;

  @media (max-width: 800px) {
    width: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 20px 0;
  width: 100%;

  h2 {
    color: #444444;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      padding: 0 20px;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }

      :nth-child(2n + 1) {
        background: #cccccc;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    div {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 30px;
  border-radius: 4px;
`;
