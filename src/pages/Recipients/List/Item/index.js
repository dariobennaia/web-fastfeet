import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import ActionButton from '~/components/ActionButton';
import history from '~/services/history';
import api from '~/services/api';

import { ActionsContent } from './styles';

function Item({ data, reload }) {
  function handleEditRecipient(id) {
    history.push(`/recipients/edit/${id}`);
  }

  async function deleteRegister(id) {
    try {
      await api.delete(`/recipients/${id}`);
      toast.success('Registro excluido com sucesso!');
      reload();
    } catch (err) {
      toast.error('Não foi possivel excluir o registro!');
    }
  }

  function handleDelete(id) {
    confirmAlert({
      title: 'Você tem certeza?',
      message: 'Excluir registro.',
      buttons: [
        {
          label: 'Sim',
          onClick: () => deleteRegister(id),
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
      <li>{data.name}</li>
      <li>{data.street}</li>
      <li>
        <ActionButton big={false}>
          <ActionsContent>
            <button type="button" onClick={() => handleEditRecipient(data.id)}>
              <MdEdit size={16} color="#4D85EE" />
              Editar
            </button>

            <button type="button" onClick={() => handleDelete(data.id)}>
              <MdDeleteForever size={16} color="#DE3B3B" />
              Excluir
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
