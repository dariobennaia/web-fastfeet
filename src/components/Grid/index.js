import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const Col = styled.div`
  width: calc(
    ((100% / 12) * ${(props) => Number(props.size)}) -
      (${(props) => Number(props.size)} * 2px)
  );

  ${(props) => {
    if (Number(props.size) === 12) {
      return css`
        :nth-last-child(-n + 1) {
          width: calc(((100% / 12) * ${Number(props.size)}) + 30px);
        }
      `;
    }
    return null;
  }};

  @media (max-width: 800px) {
    width: 100%;
  }
`;
