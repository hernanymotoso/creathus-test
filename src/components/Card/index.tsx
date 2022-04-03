import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, Content } from './styles';
import oceanAndroid from '../../assets/images/oceanAndroid.svg';
import oceanCalendar from '../../assets/images/oceanCalendar.svg';
import oceanBook from '../../assets/images/oceanBook.svg';
import oceanClock from '../../assets/images/oceanClock.svg';
import oceanUser from '../../assets/images/oceanUser.svg';
import oceanMarker from '../../assets/images/oceanMarker.svg';

import { formatDate, getAmountTimeForEvents } from '../../helpers/DateFormat';

import AboutClass from './AboutClass';
import Button from '../Button';

import { ICourseResponse } from '../../pages/Home';

interface ICardProps {
  course: ICourseResponse;
}

const Card: React.FC<ICardProps> = ({ course }) => {
  const [aboutClassActive, setAboutClassActive] = useState(false);

  return (
    <Container
      onMouseEnter={() => setAboutClassActive(!aboutClassActive)}
      onMouseLeave={() => {
        setAboutClassActive(!aboutClassActive);
      }}
    >
      <div>
        <Header>
          <span>
            <p>
              TRILHA <strong>{course.track.toLocaleUpperCase()}</strong>
            </p>
            <img
              src={oceanAndroid}
              alt="icone oceanAndroid no card, para referênciar que o curso é sobre android"
            />
          </span>
          <h2>{course.title}</h2>
        </Header>
        <Content>
          <div>
            <div className="left">
              <img
                src={oceanCalendar}
                alt="icone de calendario, onde referência o início do curso"
              />
              <p>
                INÍCIO EM <br />
                <strong>
                  {formatDate(course.startTime, "dd/MM 'às' H:mm")}
                </strong>
              </p>
            </div>
            <div className="right">
              <img
                src={oceanCalendar}
                alt="icone de calendário, onde referência o término do curso"
              />
              <p>
                TÉRMINO <br />
                <strong>{formatDate(course.startTime, 'dd/MM')}</strong>
              </p>
            </div>
          </div>
          <hr />

          <div>
            <div className="left">
              <img
                src={oceanBook}
                alt="icone de livro, onde referência a quantidade de aulas"
              />
              <p>{course.events.length} AULAS</p>
            </div>
            <div className="right">
              <img
                src={oceanClock}
                alt="icone de relógio, onde referência o total de horas de curso"
              />
              <p style={{ lineHeight: '10px' }}>
                {getAmountTimeForEvents(course.events)}H <br />
                <strong style={{ fontSize: '9px' }}>TOTAL</strong>
              </p>
            </div>
          </div>
          <hr />
          <div>
            <div className="left">
              <img
                src={oceanUser}
                alt="icone de pessoa, onde referência os oradores da aulas"
              />
              <span
                style={{
                  lineHeight: '11px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                  flexDirection: 'column',
                  fontSize: '9px',
                  color: '#464646',
                }}
              >
                {course.speakers.map(speak => (
                  <p key={speak}>{speak}</p>
                ))}
                {/* <p>PAULO SALVATORE,</p>
                <p>MARIA DA BAHIA E</p>
                <p>JOÃO DO PEDREG...</p> */}
              </span>
            </div>
            <div className="right">
              <img
                src={oceanMarker}
                alt="icone de marcação, onde referência o local do curso"
              />
              <p style={{ lineHeight: '12px' }}>
                {course.campus.toLocaleUpperCase()}
              </p>
            </div>
          </div>
          <hr />

          <span>
            {' '}
            INSCRIÇÕES A PARTIR DE{' '}
            {formatDate(course.enrollmentsStart, 'dd/MM')}
          </span>
          <Button
            // eslint-disable-next-line no-return-assign
            onClick={() => (window.location.href = `${course.detailsURL}`)}
          >
            Página do curso
          </Button>
        </Content>
      </div>

      <AboutClass aboutClassActive={aboutClassActive} events={course.events} />
    </Container>
  );
};

export default Card;
