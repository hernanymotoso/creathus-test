import React, { useCallback, useEffect, useRef, useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import oceanCalendar from '../../../assets/images/oceanCalendar.svg';
import oceanCertificate from '../../../assets/images/oceanCertificate.svg';
import oceanClockBlack from '../../../assets/images/oceanClockBlack.svg';
import { Container, Title, Content } from './styles';

interface IAboutClassProps {
  aboutClassActive?: boolean;
}

const AboutClass: React.FC<IAboutClassProps> = ({ aboutClassActive }) => {
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
    <Container aboutClassActive={aboutClassActive}>
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
            <div className="Content__single">
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
            <div className="Content__single">
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
            <div className="Content__single">
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
          </div>
        </Content>
      )}
    </Container>
  );
};

export default AboutClass;
