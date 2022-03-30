import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('Button component', () => {
  it('should render the button with your content', () => {
    const { getByText } = render(<Button>BTN test</Button>);

    expect(getByText('BTN test')).toBeInTheDocument();
  });
});
