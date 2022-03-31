import React from 'react';

import oceanLogo from '../../assets/images/oceanLogo.svg';

import { Container, Center } from './styles';

const Footer: React.FC = () => {
  console.log();

  return (
    <Container>
      <Center>
        <img src={oceanLogo} alt="ocean logo" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, omnis
          commodi recusandae quasi, voluptatibus corporis quam reiciendis
          obcaecati delectus sequi optio adipisci magni nisi aperiam? Sunt,
          ratione! Recusandae, earum excepturi!
        </p>
        <span>
          Copyright &#169; Samsung Electronics 2022. All Rights Reserved
        </span>
      </Center>
    </Container>
  );
};

export default Footer;
