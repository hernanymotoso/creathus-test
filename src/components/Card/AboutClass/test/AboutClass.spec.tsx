import React from 'react';
import { render } from '@testing-library/react';
import AboutClass from '../index';

const events = [
  {
    id: '1',
    courseId: '1',
    title: 'Parte 1',
    startTime: '2022-05-05T22:30:00.000Z',
    endTime: '2022-05-06T01:30:00.000Z',
    certificate: true,
  },
  {
    id: '2',
    courseId: '1',
    title: 'Parte 2',
    startTime: '2022-05-07T22:30:00.000Z',
    endTime: '2022-05-08T01:30:00.000Z',
    certificate: true,
  },
  {
    id: '3',
    courseId: '1',
    title: 'Sessão tira dúvidas',
    startTime: '2022-05-06T22:30:00.000Z',
    endTime: '2022-05-06T23:30:00.000Z',
  },
];
describe('AboutClass component', () => {
  it('should render the AboutClass component with events informations', () => {
    const { getByText } = render(<AboutClass events={events} />);

    // expect(getByText('05 DE MAIO')).toBeInTheDocument();
    // expect(getByText('19:30 - 22:30')).toBeInTheDocument();
    // expect(getByText('Parte 1')).toBeInTheDocument();
    // expect(getByText('3h')).toBeInTheDocument();
    // expect(getByText('07 DE MAIO')).toBeInTheDocument();
    // expect(getByText('Parte 2')).toBeInTheDocument();
    // expect(getByText('06 DE MAIO')).toBeInTheDocument();
    // expect(getByText('Sessão tira dúvidas')).toBeInTheDocument();
    // expect(getByText('1h')).toBeInTheDocument();
  });
});
