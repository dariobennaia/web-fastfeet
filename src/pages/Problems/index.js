import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

import ActionButton from '~/components/ActionButton';
import ActionsDetails from './ActionsDetails';
import Table from '~/components/Table';

import { Container, Header, Content, ActionsContent } from './styles';

function Recipients() {
  return (
    <Container>
      <Header>
        <h2>Problemas na encomenda</h2>
      </Header>
      <Content>
        <Table thead={['Encomenda', 'Problema', 'Ações']}>
          <ul>
            <li>#1</li>
            <li>Problema tal</li>
            <li>
              <ActionButton big>
                <ActionsContent>
                  <ActionsDetails />

                  <button type="button">
                    <MdDeleteForever size={16} color="#DE3B3B" />
                    Cancelar encomenda
                  </button>
                </ActionsContent>
              </ActionButton>
            </li>
          </ul>
        </Table>
      </Content>
    </Container>
  );
}

export default Recipients;
