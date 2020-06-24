import React from 'react';

// import { Container } from './styles';
import api from '~/services/api';

function Dashboard() {
  api.get('/providers');

  return <h1>Dashboard</h1>;
}

export default Dashboard;
