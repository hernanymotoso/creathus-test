import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import MenuMobile from '../index';

const menuItens = [
  {
    id: '1',
    name: 'Trilhas',
    path: '#/trilhas',
  },
  {
    id: '2',
    name: 'Cursos',
    path: '#/cursos',
  },
  {
    id: '3',
    name: 'Agenda',
    path: '#/agenda',
  },
];

describe('MenuMobile component', () => {
  it('should handle the open/close mobile menu', () => {
    render(<MenuMobile menuItens={menuItens} />);

    //  Select the MenuMobile

    const menuMobile = screen.getByRole('navigation', { hidden: true });
    // Verify if menu is hidden
    expect(menuMobile.getAttribute('aria-hidden')).toBe('true');
    expect(menuMobile).toHaveStyle({ opacity: 0 });
    expect(menuMobile).toHaveStyle({ visibility: 'hidden' });
    expect(menuMobile).toHaveStyle({ marginLeft: '-400px' });
    // expect(menuMobile).toHaveStyle({ display: 'none' });

    // Click on open button to verify if it open
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(menuMobile.getAttribute('aria-hidden')).toBe('false');
    expect(menuMobile).toHaveStyle({ opacity: 1 });
    expect(menuMobile).toHaveStyle({ visibility: 'visible' });
    expect(menuMobile).toHaveStyle({ marginLeft: '-20px' });

    // Click on open button to verify if it close
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(menuMobile.getAttribute('aria-hidden')).toBe('true');
    expect(menuMobile).toHaveStyle({ opacity: 0 });
    expect(menuMobile).toHaveStyle({ visibility: 'hidden' });
    expect(menuMobile).toHaveStyle({ marginLeft: '-400px' });
  });
});
