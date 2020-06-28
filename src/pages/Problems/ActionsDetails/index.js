import React from 'react';
import { MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';

import { Content, Button } from './styles';

function ActionsDetails({ data }) {
  return (
    <Modal
      trigger={
        <Button type="button">
          <MdVisibility size={16} color="#8E5BE8" />
          Visualizar
        </Button>
      }
    >
      <Content>
        <strong>Visualizar problema</strong>
        <p>{data.description}</p>
      </Content>
    </Modal>
  );
}

ActionsDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ActionsDetails;
