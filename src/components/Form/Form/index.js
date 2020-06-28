import styled from 'styled-components';
import { Form } from '@unform/web';

export default styled(Form)`
  > div {
    & + div {
      margin-top: 10px;
    }
  }

  @media (max-width: 800px) {
    div {
      & + div {
        margin-top: 10px;
      }
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
`;
