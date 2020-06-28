import React, { useState, useEffect, useRef } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Container, Header, Content, DefaultAvatar } from './styles';
import Form, { Input, AvatarInput, Load } from '~/components/Form';
import { Col, Row } from '~/components/Grid';
// import api from '~/services/api';
import history from '~/services/history';
import initialsName from '~/utils/initialsName';

function FormRecipients({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  const [loadingPage, setLoadingPage] = useState(true);
  const [disableButtonForm, setDisableButtonForm] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [titlePage] = useState(
    id ? 'Edição de entregadores' : 'Cadastro de entregadores'
  );

  function handleBack() {
    history.push('/deliverymen');
  }

  useEffect(() => {
    async function loadData() {
      try {
        // const {data} = api.get(`/deliveries/${id}`);
        const data = {
          avatar: {
            id: 1,
            url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          },
          name: 'teste',
          email: 't@t.t',
        };
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
        email: Yup.string()
          .email('Email inválido')
          .required('Informe o email!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.tron.log(data);
      // await api.post('/deliveries', data);
      toast.success('Entregador salvo com sucesso!');
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

      toast.error('Não foi possivel salvar o entregador!');
    } finally {
      setDisableButtonForm(false);
    }
  }

  function AvatarInputForm({ ...rest }) {
    if (!id) {
      return <AvatarInput {...rest} />;
    }

    const initials = initialsName('dario bennaia araujo santos');
    return (
      <AvatarInput
        defaultAvatar={<DefaultAvatar>{initials}</DefaultAvatar>}
        {...rest}
      />
    );
  }

  if (loadingPage) {
    return <Load />;
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
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={initialData}
          disabled={disableButtonForm}
        >
          <AvatarInputForm name="avatar_id" />
          <Row>
            <Col size={12}>
              <Input
                name="name"
                placeholder="Ex: Ludwig van Beethoven"
                label="Nome"
                disabled={disableButtonForm}
              />
            </Col>
          </Row>
          <Row>
            <Col size={12}>
              <Input
                name="email"
                placeholder="Ex: Examplo@email.com"
                label="Email"
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
