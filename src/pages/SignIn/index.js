import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Form, { Input } from '~/components/Form';
import { Row, Col } from '~/components/Grid';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-fastfeet.svg';

function SignIn() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit({ email, password }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });
      console.tron.log(email, password);
      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      dispatch(signInRequest(email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <div>
        <img src={logo} alt="FastFeet" />
      </div>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Row>
          <Col size={12}>
            <Input
              name="email"
              placeholder="exemplo@email.com"
              label="SEU E-MAIL"
              autoComplete="off"
            />
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <Input
              type="password"
              name="password"
              placeholder="***************"
              label="SUA SENHA"
            />
          </Col>
        </Row>

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}

export default SignIn;
