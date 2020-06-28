import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export function ApiInterceptors() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.interceptors.response.use(undefined, (error) => {
      if (error.response.status === 401) {
        console.tron.log('into component', error.response);
        dispatch(signOut());
      }
      return Promise.reject(error);
    });
  }, [dispatch]);
  return <></>;
}

export default api;
