import React, { useCallback, useEffect, useRef, useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import ptBR from 'date-fns/locale/pt-BR';
import oceanCalendar from '../../../assets/images/oceanCalendar.svg';
import oceanCertificate from '../../../assets/images/oceanCertificate.svg';
import oceanClockBlack from '../../../assets/images/oceanClockBlack.svg';
import { Container, Title, Content } from './styles';

import {
  formatDate,
  getAmountTimeForEvents,
} from '../../../helpers/DateFormat';

import { IEvent } from '../../../pages/Home';

interface IAboutClassProps {
  aboutClassActive?: boolean;
  events: IEvent[];
}

const AboutClass: React.FC<IAboutClassProps> = ({
  aboutClassActive,
  events,
}) => {
  const [aboutClassDownActive, setAboutClassDownActive] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!aboutClassActive) {
      setContentHeight(0);
    }
  }, [aboutClassActive]);
  // Hidden or show the <Content />
  const handleDropDownAboutClass = useCallback(() => {
    setAboutClassDownActive(!aboutClassDownActive);

    if (contentHeight) {
      setContentHeight(0);
      return;
    }

    setContentHeight(contentContainerRef?.current.clientHeight);
  }, [aboutClassDownActive, contentHeight]);

  return (
    <Container
      aria-hidden={!aboutClassActive}
      aboutClassActive={aboutClassActive}
    >
      <Title>
        <p>Sobre as aulas</p>
        {aboutClassDownActive ? (
          <MdKeyboardArrowDown onClick={() => handleDropDownAboutClass()} />
        ) : (
          <MdKeyboardArrowUp onClick={() => handleDropDownAboutClass()} />
        )}
      </Title>
      {aboutClassActive && (
        <Content
          id="aboutClassContent"
          contentHeight={contentHeight}
          // onMouseLeave={() => handleDropDownAboutClass()}
        >
          <div ref={contentContainerRef} className="Content__Container">
            {events.map(event => (
              <div key={event.id} className="Content__single">
                <div className="Content___top">
                  <span>
                    <img
                      src={oceanCalendar}
                      alt="icone de calendário, onde referência o início do curso"
                    />
                    <p>
                      {formatDate(
                        event.startTime,
                        "dd' DE 'MMMM",
                        ptBR,
                      ).toLocaleUpperCase()}
                    </p>
                  </span>
                  <p>
                    {formatDate(event.startTime, 'HH:mm')} -{' '}
                    {formatDate(event.endTime, 'HH:mm')}
                  </p>
                </div>
                <div className="Content___bottom">
                  <p>{event.title}</p>
                  <span>
                    <img
                      src={
                        event.certificate ? oceanCertificate : oceanClockBlack
                      }
                      alt=""
                    />
                    {getAmountTimeForEvents([event])}h
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Content>
      )}
    </Container>
  );
};

export default AboutClass;
