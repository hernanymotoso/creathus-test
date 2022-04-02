import React from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import oceanCalendar from '../../../assets/images/oceanCalendar.svg';
import oceanCertificate from '../../../assets/images/oceanCertificate.svg';
import oceanClockBlack from '../../../assets/images/oceanClockBlack.svg';
import { Container, Title, Content } from './styles';

const AboutClass: React.FC = () => {
  console.log();

  return (
    <Container>
      <Title>
        <p>Sobre as aulas</p>
        <MdKeyboardArrowUp />
      </Title>
      <Content>
        <div className="Content__Container">
          <div className="Content___top">
            <span>
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referencia o inicio do curso"
              />
              <p>04 DE FEVEREIRO</p>
            </span>
            <p>18:30 - 22:30</p>
          </div>
          <div className="Content___bottom">
            <p>Parte 1</p>
            <span>
              <img src={oceanCertificate} alt="" />
              3h
            </span>
          </div>
        </div>
        <div className="Content__Container">
          <div className="Content___top">
            <span>
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referencia o inicio do curso"
              />
              <p>04 DE FEVEREIRO</p>
            </span>
            <p>18:30 - 22:30</p>
          </div>
          <div className="Content___bottom">
            <p>Sessão tira-dúvidas</p>
            <span>
              <img src={oceanClockBlack} alt="" />
              1h
            </span>
          </div>
        </div>
        <div className="Content__Container">
          <div className="Content___top">
            <span>
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referencia o inicio do curso"
              />
              <p>06 DE FEVEREIRO</p>
            </span>
            <p>18:30 - 22:30</p>
          </div>
          <div className="Content___bottom">
            <p>Parte 1</p>
            <span>
              <img src={oceanCertificate} alt="" />
              3h
            </span>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default AboutClass;
