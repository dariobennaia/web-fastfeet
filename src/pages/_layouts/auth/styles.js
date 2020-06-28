import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #7d40e7;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  background: #fff;
  padding: 25px 25px 55px 25px;
  border-radius: 4px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 240px;
      max-width: 250px;
      margin-top: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    button {
      margin: 15px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }

    a {
      text-align: center;
      color: #444444;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
