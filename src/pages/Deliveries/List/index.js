import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import Item from './Item';
import Table from '~/components/Table';

import api from '~/services/api';
import history from '~/services/history';
import initialsName from '~/utils/initialsName';

import { Container, Header, Content } from './styles';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState('');

  function handleCreateDelivery() {
    history.push('/deliveries/new');
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function load(q = '') {
    try {
      const { data } = await api.get(`/deliveries`, {
        params: { q },
      });
      setDeliveries(
        data.map((v) => {
          const { deliveryman, signature, ...rest } = v;

          let status = { type: 'warning', name: 'pendente' };
          if (v.startDate && !v.endDate && !v.canceledAt) {
            status = { type: 'info', name: 'retirrada' };
          }
          if (v.startDate && v.endDate) {
            status = { type: 'success', name: 'entregue' };
          }
          if (v.startDate && v.canceledAt) {
            status = { type: 'danger', name: 'cancelada' };
          }

          return {
            status,
            deliveryman: {
              name: deliveryman.name,
              initials: initialsName(deliveryman.name),
              avatar: (deliveryman.avatar && deliveryman.avatar.url) || null,
            },
            signature: (signature && signature.url) || null,
            ...rest,
          };
        })
      );
    } catch (err) {
      toast.error('Não foi possivel listar os dados.');
    }
  }

  const debounceSearch = useRef(_.debounce((value) => load(value), 500));
  useEffect(() => {
    const loadData = search ? () => debounceSearch.current(search) : load;
    loadData();
  }, [search]);

  return (
    <Container>
      <Header>
        <h2>Gerenciando encomendas</h2>

        <div>
          <div>
            <input
              type="text"
              placeholder="Buscar por encomendas"
              onChange={handleSearch}
            />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button" onClick={handleCreateDelivery}>
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table
          thead={[
            'ID',
            'Destinatário',
            'Entregador',
            'Cidade',
            'Estado',
            'Status',
            'Ações',
          ]}
          data={deliveries}
          item={(delivery) => (
            <Item reload={load} key={delivery.id} data={delivery} />
          )}
        />
      </Content>
    </Container>
  );
}

export default Deliveries;
