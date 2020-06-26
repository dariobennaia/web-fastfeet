import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import logo from '~/assets/logo-fastfeet.svg';
import { Container, Content, Profile, Menu } from './styles';

import history from '~/services/history';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const [menu, setMenu] = useState('/dashboard');

  useEffect(() => {
    setMenu(history.location.pathname);
  }, []);

  function handleNavigateTo(to) {
    history.push(to);
    setMenu(history.location.pathname);
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Menu
            onClick={() => handleNavigateTo('/dashboard')}
            active={menu === '/dashboard'}
          >
            DASHBOARD
          </Menu>
          <Menu
            onClick={() => handleNavigateTo('/deliverymen')}
            active={menu === '/deliverymen'}
          >
            ENTREGADORES
          </Menu>
          <Menu
            onClick={() => handleNavigateTo('/recipients')}
            active={menu === '/recipients'}
          >
            DESTINATÁRIOS
          </Menu>
          <Menu
            onClick={() => handleNavigateTo('/problems')}
            active={menu === '/problems'}
          >
            PROBLEMAS
          </Menu>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button">sair do sistema</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
