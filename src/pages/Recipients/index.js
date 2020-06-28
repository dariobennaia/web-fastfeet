import React from 'react';

import { MdAdd, MdSearch, MdEdit, MdDeleteForever } from 'react-icons/md';

import ActionButton from '~/components/ActionButton';
import Table from '~/components/Table';

import { Container, Header, Content, Actions } from './styles';
import history from '~/services/history';

function Recipients() {
  function handleCreateRecipient() {
    history.push('/recipients/new');
  }

  function handleEditRecipient(id) {
    history.push(`/recipients/edit/${id}`);
  }

  return (
    <Container>
      <Header>
        <h2>Gerenciando destinatários</h2>

        <div>
          <div>
            <input type="text" placeholder="Buscar por destinatários" />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button" onClick={handleCreateRecipient}>
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table thead={['ID', 'Nome', 'Endereço', 'Ações']}>
          <ul>
            <li>#1</li>
            <li>Dário Santos</li>
            <li>Rua tal</li>
            <li>
              <ActionButton big={false}>
                <Actions>
                  <button type="button" onClick={() => handleEditRecipient(1)}>
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

export default Recipients;
