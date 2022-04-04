import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { Container, NavMenu } from './styled';

interface IMenuMobileProps {
  menuItens: { id: string; name: string; path: string }[];
}

const MenuMobile: React.FC<IMenuMobileProps> = ({ menuItens }) => {
  const [menuActive, setMenuActive] = useState(false);

  console.log();
  return (
    <Container>
      <FaBars
        aria-label="Open Menu"
        size={22}
        onClick={() => setMenuActive(true)}
      />
      <NavMenu aria-hidden={!menuActive} menuActive={menuActive}>
        <IoMdClose
          aria-label="Close Menu"
          size={32}
          onClick={() => setMenuActive(false)}
        />
        {menuItens?.map(iten => (
          <li key={iten.id}>
            <a href={iten.path}>{iten.name}</a>
          </li>
        ))}
        <span>
          <strong>Entrar / Cadastrar</strong>
        </span>
      </NavMenu>
    </Container>
  );
};

export default MenuMobile;
