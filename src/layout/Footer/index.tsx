import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import {
  Container,
  Content,
  VerticalContainer,
  Logo,
  Text,
  Social,
} from './styles';

export function Footer() {
  const { push } = useRouter();

  return (
    <Container>
      <Content>
        <VerticalContainer>
          <Logo src="/assets/plogocetainversa.png" />

          <Text>Angelo Borgo, 29 - ES</Text>
        </VerticalContainer>
        <VerticalContainer>
          <Link href="/">
            <Text>Home</Text>
          </Link>
        </VerticalContainer>
        <VerticalContainer>
          <Text
            onClick={() =>
              push('https://api.whatsapp.com/send?phone=5527995192645')
            }
          >
            Comece
          </Text>
        </VerticalContainer>
        <VerticalContainer>
          <Social>
            <IoLogoGithub
              onClick={() => push('https://github.com/ArturM-S')}
              size={32}
              color="#FFF"
            />

            <IoLogoLinkedin
              onClick={() =>
                push(
                  'https://www.linkedin.com/in/artur-marques-silva-5207a1203/',
                )
              }
              size={32}
              color="#FFF"
            />
          </Social>
        </VerticalContainer>
      </Content>
    </Container>
  );
}
