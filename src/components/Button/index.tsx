import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  bgColor,
  className,
  ...rest
}) => (
  <Container className={className} bgColor={bgColor} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
