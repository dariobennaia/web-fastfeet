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

function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [search, setSearch] = useState('');

  function handleCreateDeliveryman() {
    history.push('/deliverymen/new');
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function load(q = '') {
    try {
      const { data } = await api.get(`/deliverymen`, {
        params: { q },
      });
      setDeliverymen(
        data.map((v) => ({
          initials: initialsName(v.name),
          ...v,
          avatar: (v.avatar && v.avatar.url) || null,
        }))
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
        <h2>Gerenciando entregadores</h2>

        <div>
          <div>
            <input
              type="text"
              placeholder="Buscar por entregadores"
              onChange={handleSearch}
            />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button" onClick={handleCreateDeliveryman}>
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table
          thead={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
          data={deliverymen}
          item={(deliveryman) => (
            <Item reload={load} key={deliveryman.id} data={deliveryman} />
          )}
        />
      </Content>
    </Container>
  );
}

export default Deliverymen;
