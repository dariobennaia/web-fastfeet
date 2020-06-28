import React from 'react';

import PropTypes from 'prop-types';
import { Content, Thead, Tbody, NoRegisters } from './styles';

function Table({ thead, data, item }) {
  return (
    <Content>
      <Thead quantity={thead.length}>
        {thead.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </Thead>
      <Tbody quantity={thead.length}>
        {data.map(item)}
        {data.length === 0 && (
          <NoRegisters>Nenhum registro encontrado</NoRegisters>
        )}
      </Tbody>
    </Content>
  );
}

Table.propTypes = {
  item: PropTypes.func.isRequired,
  thead: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Table;
