import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

import ActionButton from '~/components/ActionButton';
import ActionsDetails from './ActionsDetails';

import history from '~/services/history';
import api from '~/services/api';

import {
  BadgeAvatar,
  BadgeStatus,
  ActionsContent,
  BadgeAvatarImage,
} from './styles';

function Item({ data, reload }) {
  function handleEditDelivery(id) {
    history.push(`/deliveries/edit/${id}`);
  }

  async function deleteRegister(id) {
    try {
      await api.delete(`/deliveries/${id}`);
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
      <li>{data.recipient.name}</li>
      <li>
        {(data.deliveryman.avatar && (
          <BadgeAvatarImage
            src={data.deliveryman.avatar}
            alt={data.deliveryman.name}
          />
        )) || <BadgeAvatar>{data.deliveryman.initials}</BadgeAvatar>}

        {data.deliveryman.name}
      </li>
      <li>{data.recipient.city}</li>
      <li>{data.recipient.state}</li>
      <li>
        <BadgeStatus type={data.status.type}>{data.status.name}</BadgeStatus>
      </li>
      <li>
        <ActionButton big={false}>
          <ActionsContent>
            <ActionsDetails data={data} />

            <button type="button" onClick={() => handleEditDelivery(data.id)}>
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
