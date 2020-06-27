import React, { useState } from 'react';

import {
  MdAdd,
  MdSearch,
  MdVisibility,
  MdEdit,
  MdDeleteForever,
} from 'react-icons/md';

import ActionButton from '~/components/ActionButton';
import ActionsDetails from './ActionsDetails';
import Table from '~/components/Table';

import {
  Container,
  Header,
  Content,
  BadgeAvatar,
  BadgeStatus,
  ActionsContent,
} from './styles';
import history from '~/services/history';

function Deliveries() {
  const [thead] = useState([
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
    'Ações',
  ]);

  function handleCreateDelivery() {
    history.push('/deliveries/new');
  }

  function handleEditDelivery(id) {
    history.push(`/deliveries/edit/${id}`);
  }

  return (
    <Container>
      <Header>
        <h2>Gerenciando encomendas</h2>

        <div>
          <div>
            <input type="text" placeholder="Buscar por encomendas" />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button" onClick={handleCreateDelivery}>
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table thead={thead}>
          <>
            <ul>
              <li>#1</li>
              <li>Dário santos</li>
              <li>
                <BadgeAvatar>Ds</BadgeAvatar> Um cara ai
              </li>
              <li>Fortaleza</li>
              <li>Ceará</li>
              <li>
                <BadgeStatus type="success">Entregue</BadgeStatus>
              </li>
              <li>
                <ActionButton big={false}>
                  <ActionsContent>
                    <ActionsDetails />

                    <button type="button" onClick={() => handleEditDelivery(1)}>
                      <MdEdit size={16} color="#4D85EE" />
                      Editar
                    </button>

                    <button type="button">
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      Excluir
                    </button>
                  </ActionsContent>
                </ActionButton>
              </li>
            </ul>
            <ul>
              <li>#2</li>
              <li>Dário santos</li>
              <li>
                <BadgeAvatar>Ds</BadgeAvatar> Um cara ai
              </li>
              <li>Fortaleza</li>
              <li>Ceará</li>
              <li>
                <BadgeStatus type="warning">Pendente</BadgeStatus>
              </li>
              <li>
                <ActionButton big={false}>
                  <ActionsContent>
                    <button type="button">
                      <MdVisibility size={16} color="#8E5BE8" />
                      Visualizar
                    </button>

                    <button type="button">
                      <MdEdit size={16} color="#4D85EE" />
                      Editar
                    </button>

                    <button type="button">
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      Excluir
                    </button>
                  </ActionsContent>
                </ActionButton>
              </li>
            </ul>
            <ul>
              <li>#3</li>
              <li>Dário santos</li>
              <li>
                <BadgeAvatar>Ds</BadgeAvatar> Um cara ai
              </li>
              <li>Fortaleza</li>
              <li>Ceará</li>
              <li>
                <BadgeStatus>Retirada</BadgeStatus>
              </li>
              <li>
                <ActionButton big={false}>
                  <ActionsContent>
                    <button type="button">
                      <MdVisibility size={16} color="#8E5BE8" />
                      Visualizar
                    </button>

                    <button type="button">
                      <MdEdit size={16} color="#4D85EE" />
                      Editar
                    </button>

                    <button type="button">
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      Excluir
                    </button>
                  </ActionsContent>
                </ActionButton>
              </li>
            </ul>
            <ul>
              <li>#4</li>
              <li>Dário santos</li>
              <li>
                <BadgeAvatar>Ds</BadgeAvatar> Um cara ai
              </li>
              <li>Fortaleza</li>
              <li>Ceará</li>
              <li>
                <BadgeStatus type="danger">Cancelada</BadgeStatus>
              </li>
              <li>
                <ActionButton big={false}>
                  <ActionsContent>
                    <button type="button">
                      <MdVisibility size={16} color="#8E5BE8" />
                      Visualizar
                    </button>

                    <button type="button">
                      <MdEdit size={16} color="#4D85EE" />
                      Editar
                    </button>

                    <button type="button">
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      Excluir
                    </button>
                  </ActionsContent>
                </ActionButton>
              </li>
            </ul>
          </>
        </Table>
      </Content>
    </Container>
  );
}

export default Deliveries;
