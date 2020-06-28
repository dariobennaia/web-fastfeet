import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import Item from './Item';
import Table from '~/components/Table';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Header, Content } from './styles';

function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState('');

  function handleCreateRecipient() {
    history.push('/recipients/new');
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function load(q = '') {
    try {
      const { data } = await api.get(`/recipients`, {
        params: { q },
      });
      setRecipients(
        data.map((v) => ({
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
        <h2>Gerenciando destinatários</h2>

        <div>
          <div>
            <input
              type="text"
              placeholder="Buscar por destinatários"
              onChange={handleSearch}
            />
            <MdSearch color="#999999" size={22} />
          </div>
          <button type="button" onClick={handleCreateRecipient}>
            <MdAdd size={22} color="#fff" />
            CADASTRAR
          </button>
        </div>
      </Header>
      <Content>
        <Table
          thead={['ID', 'Nome', 'Endereço', 'Ações']}
          data={recipients}
          item={(recipient) => (
            <Item reload={load} key={recipient.id} data={recipient} />
          )}
        />
      </Content>
    </Container>
  );
}

export default Recipients;
