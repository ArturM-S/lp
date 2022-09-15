import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../../components/Global/Button';
import { Container, Item } from './styles';

export function Navigation() {
  const { asPath, push } = useRouter();

  return (
    <Container>
      <Link href="/">
        <Item isActive={asPath === '/'}>Home</Item>
      </Link>
      <Link href="/Sobre">
        <Item isActive={asPath === '/Sobre'}>Sobre</Item>
      </Link>

      <Button
        onClick={() =>
          push('https://api.whatsapp.com/send?phone=5527995192645')
        }
      >
        Contate-nos!
      </Button>
    </Container>
  );
}
