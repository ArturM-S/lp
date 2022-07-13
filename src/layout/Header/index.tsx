import Link from 'next/link';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import { Container, Content, Logo } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo src="/assets/plogoceta.png" />
        </Link>

        <MobileNavigation />
        <Navigation />
      </Content>
    </Container>
  );
}
