import styled from 'styled-components';

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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0 20px 0;

    div {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;

      svg {
        position: fixed;
        margin-left: 12px;
      }

      input {
        height: 36px;
        border: 1px solid #dddddd;
        border-radius: 4px;
        padding: 10px 10px 10px 38px;
        color: #999999;

        &::placeholder {
          color: #999999;
        }
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
  display: flex;
  flex-direction: column;
  width: 100%;
`;
