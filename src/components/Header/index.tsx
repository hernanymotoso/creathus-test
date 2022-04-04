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
    <Container aria-label="Header">
      <Center>
        <img aria-label="Logo" src={oceanLogo} alt="Logo" />
        <Nav aria-label="Navigation Menu">
          {menuItens?.map(iten => (
            <li key={iten.id}>
              <a href={iten.path}>{iten.name}</a>
            </li>
          ))}
        </Nav>
        <span aria-label="Actions To Enter In App">
          <strong>Entrar / </strong>
          <strong>Cadastrar</strong>
        </span>
        <MenuMobile aria-label="Menu Mobile" menuItens={menuItens} />
      </Center>
    </Container>
  );
};

export default Header;
