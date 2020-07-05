import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;

    & + div {
      padding-top: 10px;
    }

    small {
      font-size: 15px;
      color: #666;
      line-height: 26px;
    }

    strong {
      font-size: 14px;
      color: #444;
      margin-bottom: 4px;
    }

    :nth-last-child(-n + 1) {
      border: 0;
    }

    img {
      max-height: 200px;
      width: 300px;
      margin: 0 auto;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-start;
  background: none;
  border: 0;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  padding: 10px 0;
  color: #999999;

  svg {
    margin-right: 5px;
  }

  :nth-last-child(-n + 1) {
    border: 0;
  }

  transition: background 0.2s;

  :hover {
    background: ${darken(0.02, '#ffffff')};
  }
`;
