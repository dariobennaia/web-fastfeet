import React from 'react';

import { MdAdd, MdSearch, MdEdit, MdDeleteForever } from 'react-icons/md';

import ActionButton from '~/components/ActionButton';
import Table from '~/components/Table';

import { Container, Header, Content, BadgeAvatar, Actions } from './styles';

function Deliverymen() {
  return (
    <Container>
      <Header>
        <h2>Gerenciando entregadores</h2>

        <div>
          <div>
            <input type="text" placeholder="Buscar por entregadores" />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button">
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table thead={['ID', 'Foto', 'Nome', 'Email', 'Ações']}>
          <ul>
            <li>#1</li>
            <li>
              <BadgeAvatar>Ds</BadgeAvatar>
            </li>
            <li>Dário Santos</li>
            <li>dario@gmail.com</li>
            <li>
              <ActionButton big={false}>
                <Actions>
                  <button type="button">
                    <MdEdit size={16} color="#4D85EE" />
                    Editar
                  </button>

                  <button type="button">
                    <MdDeleteForever size={16} color="#DE3B3B" />
                    Excluir
                  </button>
                </Actions>
              </ActionButton>
            </li>
          </ul>
        </Table>
      </Content>
    </Container>
  );
}

export default Deliverymen;
