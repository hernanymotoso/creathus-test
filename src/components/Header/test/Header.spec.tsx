import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../index';

describe('Header component', () => {
  it('should render the nav menu with your itens', () => {
    const menuItens = [
      {
        id: 'asdff',
        name: 'Trilhas',
        path: '#/trilhas',
      },
      {
        id: 'asldkjh',
        name: 'Cursos',
        path: '#/cursos',
      },
      {
        id: 'aspu',
        name: 'Agenda',
        path: '#/agenda',
      },
    ];

    render(<Header menuItens={menuItens} />);

    // if have logo
    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument();

    // if have mavigation menu
    expect(screen.getByLabelText(/navigation menu/i)).toBeInTheDocument();

    // if have action to enter or register in app
    expect(
      screen.getByLabelText(/actions to enter in app/i),
    ).toBeInTheDocument();
  });
});
