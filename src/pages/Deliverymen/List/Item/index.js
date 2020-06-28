import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import ActionButton from '~/components/ActionButton';
import history from '~/services/history';
import api from '~/services/api';

import { BadgeAvatar, ActionsContent, BadgeAvatarImage } from './styles';

function Item({ data, reload }) {
  function handleEditDeliveryman(id) {
    history.push(`/deliverymen/edit/${id}`);
  }

  async function deleteRegister(id) {
    try {
      await api.delete(`/deliverymen/${id}`);
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
      <li>
        {(data.avatar && (
          <BadgeAvatarImage src={data.avatar} alt={data.name} />
        )) || <BadgeAvatar>{data.initials}</BadgeAvatar>}
      </li>
      <li>{data.name}</li>
      <li>{data.email}</li>
      <li>
        <ActionButton big={false}>
          <ActionsContent>
            <button
              type="button"
              onClick={() => handleEditDeliveryman(data.id)}
            >
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
