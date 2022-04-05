import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../index';

const course = {
  id: '1',
  track: 'Android',
  title: 'WebServices com Retrofit e Imagens Glide',
  startTime: '2022-05-05T22:30:00.000Z',
  endDate: '2022-05-12T03:00:00.000Z',
  campus: 'Campus de Manaus',
  speakers: ['Paulo Salvatore', 'Maria da Bahia', 'João do Pedregulho'],
  enrollmentsStart: '2022-04-30T03:00:00.000Z',
  detailsURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  events: [
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
  ],
};

describe('Card component', () => {
  it('should be show or hidden the about class component when mouse enter or mouse leave on card component', () => {
    render(<Card course={course} />);

    const aboutClass = screen.getByRole('main', { hidden: true });

    // when we mouse enter or mouse leave on card component, we can check if the about class component is visible or hidden
    fireEvent.mouseEnter(screen.getByLabelText(/enter about class/i));

    // check if the about class is visible
    expect(aboutClass.getAttribute('aria-hidden')).toBe('false');
    expect(aboutClass).toHaveStyle({ opacity: 1 });
    expect(aboutClass).toHaveStyle({ visibility: 'visible' });

    // check if the about class is hidden
    fireEvent.mouseLeave(screen.getByLabelText(/enter about class/i));
    expect(aboutClass.getAttribute('aria-hidden')).toBe('true');
    expect(aboutClass).toHaveStyle({ opacity: 0 });
    expect(aboutClass).toHaveStyle({ visibility: 'hidden' });
  });

  it('should render the card component with course informations', () => {
    const { getByText } = render(<Card course={course} />);

    expect(getByText('ANDROID')).toBeInTheDocument();
    expect(
      getByText('WebServices com Retrofit e Imagens Glide'),
    ).toBeInTheDocument();
    // expect(getByText('05/05 às 19:30')).toBeInTheDocument();
    expect(getByText('05/05')).toBeInTheDocument();
    expect(getByText('3 AULAS')).toBeInTheDocument();
    expect(getByText('Paulo Salvatore')).toBeInTheDocument();
    expect(getByText('Maria da Bahia')).toBeInTheDocument();
    expect(getByText('João do Pedregulho')).toBeInTheDocument();
    expect(getByText('CAMPUS DE MANAUS')).toBeInTheDocument();
    expect(getByText('INSCRIÇÕES A PARTIR DE 30/04')).toBeInTheDocument();
  });
});
