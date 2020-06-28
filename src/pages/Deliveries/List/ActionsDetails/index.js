import React from 'react';
import { MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import Modal from '~/components/Modal';

import { Content, Button } from './styles';

function ActionsDetails({ data }) {
  function handleFormatDate(date, message) {
    if (!date) return message;
    return format(parseISO(date), 'dd/MM/yyyy');
  }

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
          <small>
            {data.recipient.street}, {data.recipient.number}
          </small>
          <small>
            {data.recipient.city} - {data.recipient.state}
          </small>
          <small>{data.recipient.postCode}</small>
        </div>

        <div>
          <strong>Datas</strong>
          <small>
            Retirada: {handleFormatDate(data.startDate, 'Não restirada')}
          </small>
          <small>
            Entregue: {handleFormatDate(data.endDate, 'Não entregue')}
          </small>
        </div>

        <div>
          <strong>Assinatura do destinatario</strong>
          {(data.signature && (
            <img src={data.signature} alt="Assinatura" />
          )) || <small>Nenhuma assinatura</small>}
        </div>
      </Content>
    </Modal>
  );
}

ActionsDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ActionsDetails;
