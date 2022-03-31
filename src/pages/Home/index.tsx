import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { Container } from './styles';

const menuItens = [
  {
    id: uuidV4(),
    name: 'Trilhas',
    path: '#/trilhas',
  },
  {
    id: uuidV4(),
    name: 'Cursos',
    path: '#/cursos',
  },
  {
    id: uuidV4(),
    name: 'Agenda',
    path: '#/agenda',
  },
];

const Home: React.FC = () => {
  console.log('Home-page');

  return (
    <>
      <Header menuItens={menuItens} />
      {/* <Button>Página do curso</Button> */}
      <Container>
        <h1>Home</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
