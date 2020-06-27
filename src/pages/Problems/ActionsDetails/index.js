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
        <strong>Visualizar problema</strong>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </p>
      </Content>
    </Modal>
  );
}

ActionsDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ActionsDetails;
