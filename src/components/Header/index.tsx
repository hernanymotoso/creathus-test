import React from 'react';

import oceanLogo from '../../assets/images/oceanLogo.svg';
import { Container, Center, Nav } from './styles';
import MenuMobile from './MenuMobile';

interface IHeaderProps {
  menuItens: { id: string; name: string; path: string }[];
}

const Header: React.FC<IHeaderProps> = ({ menuItens }) => {
  console.log();

  return (
    <Container>
      <Center>
        <img src={oceanLogo} alt="logo" />
        <Nav>
          {menuItens?.map(iten => (
            <li key={iten.id}>
              <a href={iten.path}>{iten.name}</a>
            </li>
          ))}
        </Nav>
        <span>
          <strong>Entrar / </strong>
          <strong>Cadastrar</strong>
        </span>
        <MenuMobile menuItens={menuItens} />
      </Center>
    </Container>
  );
};

export default Header;
