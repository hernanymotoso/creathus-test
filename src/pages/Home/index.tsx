import React, { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Masonry from 'react-masonry-css';
import CircularProgress from '@mui/material/CircularProgress';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';
import Card from '../../components/Card';

import { formatDate, getAmountTimeForEvents } from '../../helpers/DateFormat';

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

  const breakpoints = {
    default: 4,
    1100: 2,
    720: 1,
  };

  useEffect(() => {
    const date = '2022-05-05T22:30:00.000Z';
    formatDate(date, "dd/MM 'às' H:mm");
    getAmountTimeForEvents(courses[1]?.events);

    api
      .get<ICourseResponse[]>('/courses?_embed=events')
      .then(response => {
        setCourses(response.data);
      })
      .catch(err => console.log('@HOME-PAGE  error API-request=', err));
  }, []);

  return (
    <>
      <Header menuItens={menuItens} />
      <Container>
        <h1>Cursos</h1>

        {courses.length === 0 ? (
          <CircularProgress />
        ) : (
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            // columnClassName="my-masonry-grid_column"
          >
            {courses.map(course => (
              <Card key={course.id} course={course} />
            ))}
          </Masonry>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Home;
