import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;

  h2 {
    color: #444444;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonOption = styled.button`
  background: none;
  border: 0;
`;

export const ActionsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  button {
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
  }
`;
