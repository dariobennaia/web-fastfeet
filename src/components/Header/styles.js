import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 0px 5px #dddddd;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  max-width: 1375px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

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

  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 64px;
    height: auto;
    justify-content: flex-start;
    align-items: flex-start;

    aside {
      display: block;
      align-self: flex-end;
      position: absolute;
      margin: 5px 0 0 0;
    }

    nav {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 15px 0;
    }

    nav img {
      display: block;
      align-self: center;
      position: absolute;
      margin: 5px 0 0 0;
      padding: 0;
      border: 0;
    }
  }

  @media (min-width: 800px) {
    nav button {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const MenuOption = styled.li`
  list-style: none;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.active ? '#444444' : '#999999')};

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    & + li {
      margin-top: 10px;
    }
  }

  @media (min-width: 800px) {
    & + li {
      margin-left: 15px;
    }
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

    @media (max-width: 800px) {
      strong,
      button:nth-child(2n + 0) {
        display: none;
      }

      button:nth-child(2n + 1) {
        margin: 10px 0 0 0;
      }
    }

    @media (min-width: 800px) {
      button:nth-child(2n + 1) {
        display: none;
      }
    }
  }
`;
