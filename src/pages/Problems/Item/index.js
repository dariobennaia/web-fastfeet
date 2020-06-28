import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdDeleteForever } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import ActionButton from '~/components/ActionButton';
import api from '~/services/api';

import ActionsDetails from '../ActionsDetails';

import { ActionsContent } from './styles';

function Item({ data, reload }) {
  async function cancelRegister(id) {
    try {
      await api.delete(`/problems/${id}/cancel-delivery`);
      toast.success('Encomenda cancelada com sucesso!');
      reload();
    } catch (err) {
      toast.error('Não foi possivel cancelar a encomenda!');
    }
  }

  function handleCancel(id) {
    confirmAlert({
      title: 'Você tem certeza?',
      message: 'Cancelar registro.',
      buttons: [
        {
          label: 'Sim',
          onClick: () => cancelRegister(id),
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  return (
    <ul>
      <li>#{data.id}</li>
      <li>{data.description}</li>
      <li>
        <ActionButton big>
          <ActionsContent>
            <ActionsDetails data={data} />

            <button type="button" onClick={() => handleCancel(data.deliveryId)}>
              <MdDeleteForever size={16} color="#DE3B3B" />
              Cancelar encomenda
            </button>
          </ActionsContent>
        </ActionButton>
      </li>
    </ul>
  );
}

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  reload: PropTypes.func.isRequired,
};

export default Item;
