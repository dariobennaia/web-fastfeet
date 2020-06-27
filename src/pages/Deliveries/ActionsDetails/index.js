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
        <div>
          <strong>Informações da encomenda</strong>
          <small>Rua 216, 124</small>
          <small>Fortaleza - Ce</small>
          <small>60866-270</small>
        </div>

        <div>
          <strong>Datas</strong>
          <small>Retirada: 12/12/2020</small>
          <small>Entrega: 12/12/2020</small>
        </div>

        <div>
          <strong>Assinatura do destinatario</strong>
        </div>
      </Content>
    </Modal>
  );
}

ActionsDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ActionsDetails;
