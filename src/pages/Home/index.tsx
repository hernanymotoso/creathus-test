import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Masonry from 'react-masonry-css';
import CircularProgress from '@mui/material/CircularProgress';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';
import Card from '../../components/Card';

import Button from '../../components/Button';

export interface IEvent {
  id: string;
  courseId: string;
  title: string;
  startTime: string;
  endTime: string;
  certificate?: boolean;
}

export interface ICourseResponse {
  id: string;
  track: string;
  title: string;
  startTime: string;
  endDate: string;
  campus: string;
  speakers: string[];
  enrollmentsStart: string;
  detailsURL: string;
  events: IEvent[];
}

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
  const [courses, setCourses] = useState<ICourseResponse[]>(
    [] as ICourseResponse[],
  );
  const [currentcourses, setCurrentcourses] = useState<ICourseResponse[]>(
    [] as ICourseResponse[],
  );
  const [isFourItens, setIsFourItens] = useState(true);
  const [contentHeight, setContentHeight] = useState<number>();
  const breakpoints = {
    default: 4,
    1100: 2,
    720: 1,
  };

  const showFourItems = useCallback(() => {
    const newCursers = courses.filter((item, index) => index < 4);
    setCurrentcourses(newCursers);
    setIsFourItens(true);
  }, [courses]);
  const showAllItens = useCallback(() => {
    setCurrentcourses(courses);
    setIsFourItens(false);
  }, [courses]);

  useEffect(() => {
    api
      .get<ICourseResponse[]>('/courses?_embed=events')
      .then(response => {
        setCourses(response.data);
      })
      .catch(err => console.log('@HOME-PAGE  error API-request=', err));
  }, []);

  useEffect(() => {
    showFourItems();
  }, [showFourItems]);

  return (
    <>
      <Header menuItens={menuItens} />
      <Container id="ddContainer">
        <h1>Cursos</h1>
        {currentcourses.length === 0 ? (
          <CircularProgress />
        ) : (
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            // columnClassName="my-masonry-grid_column"
          >
            {currentcourses.map(course => (
              <Card key={course.id} course={course} />
            ))}
          </Masonry>
        )}
        <Button
          onClick={isFourItens ? () => showAllItens() : () => showFourItems()}
          bgColor="F8F8F8"
        >
          {isFourItens ? 'Ver tudo' : 'Ver menos'}
        </Button>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
