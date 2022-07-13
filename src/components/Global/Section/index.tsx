import { ReactNode } from 'react';
import { Container, Content } from './styles';

interface SectionProps {
  children: ReactNode;
  variant: 'white' | 'yellow';
  isReverse?: boolean;
  isCenter?: boolean;
}

export function Section({
  children,
  variant,
  isReverse,
  isCenter,
}: SectionProps) {
  return (
    <Container variant={variant}>
      <Content isReverse={isReverse} isCenter={isCenter}>
        {children}
      </Content>
    </Container>
  );
}
