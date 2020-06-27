import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;
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

    @media (max-width: 800px) {
      flex-direction: column-reverse;

      input {
        width: 100%;
        margin-top: 10px;
      }

      div {
        display: flex;
        align-items: flex-start;

        svg {
          position: block;
          margin-top: -5px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 30px;
  border-radius: 4px;

  form {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      & + div {
        margin-top: 10px;
        grid-template-columns: repeat(1, 1fr);
      }
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #444444;
    }

    input {
      background: #ffffff;
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #999999;
      width: 100%;
      border: 1px solid #dddddd;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      margin: -10px 0 10px;
      align-self: flex-start;
      font-weight: bold;
      font-size: 11px;
    }
  }
`;
