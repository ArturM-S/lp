import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'filled';
  isLoading?: boolean;
}

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
}
