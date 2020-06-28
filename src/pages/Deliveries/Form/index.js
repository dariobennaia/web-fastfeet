import React, { useState, useEffect, useRef } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Container, Header, Content } from './styles';
import Form, { Input, Select, Load } from '~/components/Form';
import { Col, Row } from '~/components/Grid';
// import api from '~/services/api';
import history from '~/services/history';

function FormDeliveries({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  const [titlePage] = useState(
    id ? 'Edição de encomendas' : 'Cadastro de encomendas'
  );

  const [loadingPage, setLoadingPage] = useState(true);
  const [disableButtonForm, setDisableButtonForm] = useState(false);
  const [initialData, setInitialData] = useState({});

  const [recipients] = useState([{ value: 1, label: 'Destinatario 1' }]);
  const [selectedRecipient, setSelectRecipient] = useState('');

  const [deliverymen] = useState([{ value: 1, label: 'Entregador 1' }]);
  const [selectedDeliveryman, setSelectDeliveryman] = useState('');

  function handleBack() {
    history.push('/deliveries');
  }

  useEffect(() => {
    async function loadData() {
      try {
        // const {data} = api.get(`/deliveries/${id}`);
        const data = { product: 'produto tal' };
        setSelectRecipient(recipients[0]);
        setSelectDeliveryman(deliverymen[0]);
        setInitialData(data);
        setLoadingPage(false);
      } catch (err) {
        toast.error('Não é possivel atualizar os dados!');
        handleBack();
      }
    }
    if (id) {
      loadData();
      return;
    }
    setLoadingPage(false);
  }, [id, recipients, deliverymen]);

  function handleChangeRecipient(selectedOption) {
    setSelectRecipient(selectedOption);
  }

  function handleChangeDeliveryman(selectedOption) {
    setSelectDeliveryman(selectedOption);
  }

  async function handleSubmit(data) {
    try {
      setDisableButtonForm(true);
      const schema = Yup.object().shape({
        id_recipient: Yup.string().required('Informe o destinatário!'),
        id_deliveryman: Yup.string().required('Informe o entregador!'),
        product: Yup.string()
          .min(5, 'O nome deve conter no minimo 5 caracteres!')
          .required('Informe o nome do produto!'),
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
    } finally {
      setDisableButtonForm(false);
    }
  }

  if (loadingPage) {
    return <Load />;
  }

  return (
    <Container>
      <Header>
        <h2>{titlePage}</h2>

        <div>
          <button
            type="button"
            onClick={handleBack}
            disabled={disableButtonForm}
          >
            <MdKeyboardArrowLeft size={22} color="#fff" />
            Voltar
          </button>
          <button
            type="button"
            id="save"
            onClick={() => formRef.current.submitForm()}
            disabled={disableButtonForm}
          >
            <MdCheck size={22} color="#fff" />
            Salvar
          </button>
        </div>
      </Header>

      <Content>
        <Form onSubmit={handleSubmit} ref={formRef} initialData={initialData}>
          <Row>
            <Col size={6}>
              <Select
                name="id_recipient"
                label="Destinatário"
                placeholder="Selecione um destinatário"
                options={recipients}
                value={selectedRecipient}
                defaultValue=""
                onChange={handleChangeRecipient}
              />
            </Col>
            <Col size={6}>
              <Select
                name="id_deliveryman"
                label="Entregador"
                placeholder="Selecione um entregador"
                options={deliverymen}
                value={selectedDeliveryman}
                defaultValue=""
                onChange={handleChangeDeliveryman}
              />
            </Col>
          </Row>
          <Row>
            <Col size={12}>
              <Input
                name="product"
                placeholder="Yamaha SX7"
                label="Nome do produto"
              />
            </Col>
          </Row>
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
