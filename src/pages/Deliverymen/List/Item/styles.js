import styled from 'styled-components';
import { darken } from 'polished';

export const BadgeAvatar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4effc;
  height: 35px;
  width: 35px;
  border: 0;
  border-radius: 50%;
  color: ${darken(0.2, '#f4effc')};
  text-transform: uppercase;
  margin-right: 5px;
`;

export const BadgeAvatarImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border: 0;
  border-radius: 50%;
  margin-right: 5px;
`;

export const BadgeStatus = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#dff0df';
      case 'warning':
        return '#F0F0DF';
      case 'danger':
        return '#FAB0B0';
      default:
        return '#BAD2FF';
    }
  }};
  padding: 5px 10px;
  border: 0;
  border-radius: 12px;
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#2ca42b';
      case 'warning':
        return '#C1BC35';
      case 'danger':
        return '#DE3B3B';
      default:
        return '#4D85EE';
    }
  }};
  font-weight: bold;
  text-transform: uppercase;

  &::before {
    display: block;
    width: 8px;
    height: 8px;
    background: ${(props) => {
      switch (props.type) {
        case 'success':
          return '#2ca42b';
        case 'warning':
          return '#C1BC35';
        case 'danger':
          return '#DE3B3B';
        default:
          return '#4D85EE';
      }
    }};
    content: '';
    border-radius: 50%;
    margin-right: 5px;
  }
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
