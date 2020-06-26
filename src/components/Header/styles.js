import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 0px 5px #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #dddddd;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.li`
  list-style: none;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.active ? '#444444' : '#999999')};

  & + li {
    margin-left: 15px;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666666;
    }

    button {
      background: none;
      border: 0;
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
    }
  }
`;
