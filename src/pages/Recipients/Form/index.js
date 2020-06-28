import React, { useState, useEffect, useRef } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Header, Content } from './styles';
import Form, { Input, InputMask, Load } from '~/components/Form';
import { Col, Row } from '~/components/Grid';

function FormRecipients({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  const [loadingPage, setLoadingPage] = useState(true);
  const [disableButtonForm, setDisableButtonForm] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [titlePage] = useState(
    id ? 'Edição de destinatário' : 'Cadastro de destinatário'
  );

  function handleBack() {
    history.push('/recipients');
  }

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get(`/recipients/${id}`);
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
  }, [id]);

  async function handleSubmit(data) {
    try {
      setDisableButtonForm(true);
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(5, 'O nome deve conter no minimo 5 caracteres!')
          .required('Informe o nome!'),
        street: Yup.string().required('Informe a rua!'),
        number: Yup.string().required('Informe o número!'),
        city: Yup.string().required('Informe a cidade!'),
        state: Yup.string().required('Informe o estado!'),
        postCode: Yup.string()
          .min(9, 'CEP inválido!')
          .required('Informe o CEP!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/recipients/${id}`, data);
      } else {
        await api.post('/recipients', data);
      }

      toast.success('Destinatário salvo com sucesso!');
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

      toast.error('Não foi possivel salvar o destinatário!');
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
            <Col size={12}>
              <Input
                name="name"
                placeholder="Ex: Ludwig van Beethoven"
                label="Nome"
              />
            </Col>
          </Row>
          <Row>
            <Col size={7}>
              <Input name="street" placeholder="Ex: Rua 10" label="Rua" />
            </Col>
            <Col size={2.5}>
              <Input name="number" placeholder="Ex: 1729" label="Número" />
            </Col>
            <Col size={2.5}>
              <Input name="complement" label="Complemento" />
            </Col>
          </Row>
          <Row>
            <Col size={4}>
              <Input name="city" placeholder="Ex: Fortaleza" label="Cidade" />
            </Col>
            <Col size={4}>
              <Input name="state" placeholder="Ex: Ceará" label="Estado" />
            </Col>
            <Col size={4}>
              <InputMask
                name="postCode"
                label="CEP"
                mask="99999-999"
                maskChar=""
                placeholder="Ex: 60866-000"
              />
            </Col>
          </Row>
        </Form>
      </Content>
    </Container>
  );
}

FormRecipients.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default FormRecipients;
