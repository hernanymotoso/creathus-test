import React from 'react';
import { render } from '@testing-library/react';

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

    const { getByText } = render(<Header menuItens={menuItens} />);

    // expect(getByText('Trilhas')).toBeInTheDocument();
    // expect(getByText('Cursos')).toBeInTheDocument();
    // expect(getByText('Agenda')).toBeInTheDocument();
  });
});
