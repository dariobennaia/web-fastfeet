import React from 'react';

import PropTypes from 'prop-types';
import { Content, Thead, Tbody } from './styles';

function Table({ children, thead }) {
  return (
    <Content>
      <Thead quantity={thead.length}>
        {thead.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </Thead>
      <Tbody quantity={thead.length}>{children}</Tbody>
    </Content>
  );
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
  thead: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
