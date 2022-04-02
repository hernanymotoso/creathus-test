import React from 'react';

import { Container, Header, Content } from './styles';
import oceanAndroid from '../../assets/images/oceanAndroid.svg';
import oceanCalendar from '../../assets/images/oceanCalendar.svg';
import oceanBook from '../../assets/images/oceanBook.svg';
import oceanClock from '../../assets/images/oceanClock.svg';
import oceanUser from '../../assets/images/oceanUser.svg';
import oceanMarker from '../../assets/images/oceanMarker.svg';

import AboutClass from './AboutClass';

import Button from '../Button';

const Card: React.FC = () => {
  console.log();

  return (
    <Container>
      <div>
        <Header>
          <span>
            <p>
              TRILHA <strong>ANDROID</strong>
            </p>
            <img
              src={oceanAndroid}
              alt="icone oceanAndroid no card, para referenciar que o curso é sobre android"
            />
          </span>
          <h2>WebServices com Retrofit e Imagens Glide</h2>
        </Header>
        <Content>
          <div>
            <div className="left">
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referencia o inicio do curso"
              />
              <p>
                INÍCIO EM <br />
                <strong>12/01 às 16:00</strong>
              </p>
            </div>
            <div className="right">
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referencia o término do curso"
              />
              <p>
                TÉRMINO <br />
                <strong>16/01</strong>
              </p>
            </div>
          </div>
          <hr />

          <div>
            <div className="left">
              <img
                src={oceanBook}
                alt="icone de livro, onde referencia a quantidade de aulas"
              />
              <p>
                3 AULAS
                <br />
                {/* <strong>12/01 às 16:00</strong> */}
              </p>
            </div>
            <div className="right">
              <img
                src={oceanClock}
                alt="icone de relógio, onde referencia o total de horas de curso"
              />
              <p style={{ lineHeight: '10px' }}>
                12H <br />
                <strong style={{ fontSize: '9px' }}>TOTAL</strong>
              </p>
            </div>
          </div>
          <hr />
          <div>
            <div className="left">
              <img
                src={oceanUser}
                alt="icone de livro, onde referencia a quantidade de aulas"
              />
              <p
                style={{
                  lineHeight: '11px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontSize: '9px',
                }}
              >
                <p>PAULO SALVATORE,</p>
                <p>MARIA DA BAHIA E</p>
                <p>JOÃO DO PEDREG...</p>
              </p>
            </div>
            <div className="right">
              <img
                src={oceanMarker}
                alt="icone de Marcação, onde referencia o local do curso"
              />
              <p style={{ lineHeight: '12px' }}>CAMPUS MANAUS</p>
            </div>
          </div>
          <hr />

          <span> INSCRIÇÕES A PARTIR DE 11/01</span>
          <Button>Página do curso</Button>
        </Content>
      </div>
      <AboutClass />
    </Container>
  );
};

export default Card;
