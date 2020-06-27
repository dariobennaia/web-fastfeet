import React, { useState, useEffect, useRef } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Container, Header, Content } from './styles';
import Form, { Input, Select } from '~/components/Form';
// import api from '~/services/api';
import history from '~/services/history';

function FormDeliveries({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  const [titlePage] = useState(
    id ? 'Edição de encomendas' : 'Cadastro de encomendas'
  );
  const [recipients] = useState([{ value: 1, label: 'Destinatario 1' }]);
  const [selectedRecipient, setSelectRecipient] = useState('');

  const [deliverymen] = useState([{ value: 1, label: 'Entregador 1' }]);
  const [selectedDeliveryman, setSelectDeliveryman] = useState('');

  useEffect(() => {
    // console.tron.log('asdsadsadsadsad', match.params.id);
  });

  function handleChangeRecipient(selectedOption) {
    setSelectRecipient(selectedOption);
  }

  function handleChangeDeliveryman(selectedOption) {
    setSelectDeliveryman(selectedOption);
  }

  function handleBack() {
    history.push('/deliveries');
  }

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        id_recipient: Yup.string().required('Informe o destinatário!'),
        id_deliveryman: Yup.string().required('Informe o entregador!'),
        product: Yup.string().required('Informe o nome do produto!'),
      });

      data.id_recipient = selectedRecipient.value;
      data.id_deliveryman = selectedDeliveryman.value;
      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('/deliveries', data);
      toast.success('Entrega salva com sucesso!');
      handleBack();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        return;
      }

      toast.error('Não foi possivel salvar a entrega!');
    }
  }

  return (
    <Container>
      <Header>
        <h2>{titlePage}</h2>

        <div>
          <button type="button" onClick={handleBack}>
            <MdKeyboardArrowLeft size={22} color="#fff" />
            Voltar
          </button>
          <button
            type="button"
            id="save"
            onClick={() => formRef.current.submitForm()}
          >
            <MdCheck size={22} color="#fff" />
            Salvar
          </button>
        </div>
      </Header>

      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <div>
            <div>
              <Select
                name="id_recipient"
                label="Destinatário"
                placeholder="Selecione um destinatário"
                options={recipients}
                value={selectedRecipient}
                defaultValue=""
                onChange={handleChangeRecipient}
              />
            </div>
            <div>
              <Select
                name="id_deliveryman"
                label="Entregador"
                placeholder="Selecione um entregador"
                options={deliverymen}
                value={selectedDeliveryman}
                defaultValue=""
                onChange={handleChangeDeliveryman}
              />
            </div>
          </div>
          <div>
            <div>
              <Input
                name="product"
                placeholder="Yamaha SX7"
                label="Nome do produto"
              />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}

FormDeliveries.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default FormDeliveries;
