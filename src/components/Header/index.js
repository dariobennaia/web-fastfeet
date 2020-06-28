import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdList, MdExitToApp } from 'react-icons/md';
import logo from '~/assets/logo-fastfeet.svg';
import { Container, Content, Profile, Menu, MenuOption } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import history from '~/services/history';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [menu, setMenu] = useState('/dashboard');
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setMenu(history.location.pathname);
  }, []);

  function handleNavigateTo(to) {
    history.push(to);
    setMenu(history.location.pathname);
  }

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <button type="button" onClick={handleToggleMenu}>
            <MdList size={36} color="#444444" />
          </button>
          <Menu active={toggleMenu}>
            <MenuOption
              onClick={() => handleNavigateTo('/deliveries')}
              active={menu === '/deliveries'}
            >
              ENCOMENDAS
            </MenuOption>
            <MenuOption
              onClick={() => handleNavigateTo('/deliverymen')}
              active={menu === '/deliverymen'}
            >
              ENTREGADORES
            </MenuOption>
            <MenuOption
              onClick={() => handleNavigateTo('/recipients')}
              active={menu === '/recipients'}
            >
              DESTINATÁRIOS
            </MenuOption>
            <MenuOption
              onClick={() => handleNavigateTo('/problems')}
              active={menu === '/problems'}
            >
              PROBLEMAS
            </MenuOption>
          </Menu>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
              <button type="button">
                <MdExitToApp size={32} color="#de3b3b" />
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
