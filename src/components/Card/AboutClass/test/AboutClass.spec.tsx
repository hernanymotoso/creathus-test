import React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<AboutClass events={events} aboutClassActive />);

    // get about Class
    const aboutClass = screen.getByRole('main', { hidden: true });

    // check if the about class is visible
    expect(aboutClass.getAttribute('aria-hidden')).toBe('false');
    expect(aboutClass).toHaveStyle({ opacity: 1 });
    expect(aboutClass).toHaveStyle({ visibility: 'visible' });

    expect(screen.getByText('05 DE MAIO')).toBeInTheDocument();
    // expect(screen.getByText('19:30 - 22:30')).toBeInTheDocument();
    expect(screen.getByText('Parte 1')).toBeInTheDocument();
    // expect(screen.getByText('3h')).toBeInTheDocument();
    expect(screen.getByText('07 DE MAIO')).toBeInTheDocument();
    expect(screen.getByText('Parte 2')).toBeInTheDocument();
    expect(screen.getByText('06 DE MAIO')).toBeInTheDocument();
    expect(screen.getByText('Sessão tira dúvidas')).toBeInTheDocument();
    expect(screen.getByText('1h')).toBeInTheDocument();
  });

  it('should not render the AboutClass component', () => {
    render(<AboutClass events={events} aboutClassActive={false} />);

    // get about Class
    const aboutClass = screen.getByRole('main', { hidden: true });

    // check if the about class is not visible
    expect(aboutClass.getAttribute('aria-hidden')).toBe('true');
    expect(aboutClass).toHaveStyle({ opacity: 0 });
    expect(aboutClass).toHaveStyle({ visibility: 'hidden' });
  });
});
