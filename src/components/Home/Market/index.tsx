import { useRouter } from 'next/router';
import { Button } from '../../Global/Button';
import { Section } from '../../Global/Section';

import {
  Banner,
  BannerContainer,
  Container,
  Subtitle,
  TextContainer,
  Title,
} from './styles';

export function Market() {
  const { push } = useRouter();

  return (
    <Container>
      <Section variant="yellow" isReverse>
        <BannerContainer>
          <Banner src="/assets/kole.png" />
        </BannerContainer>

        <TextContainer>
          <Title>Mercado digital</Title>

          <Subtitle>
            Com um site, você possui muito mais artifícios.
            <br />
            <br />
            Além do mais, por meio da criação de conteúdo, você consegue provar
            para o visitante que entende do assunto e que tem capacidade técnica
            para ser a solução dos problemas que ela enfrenta.
          </Subtitle>
          <Button
            onClick={() =>
              push('https://api.whatsapp.com/send?phone=5527995192645')
            }
            variant="filled"
          >
            Contato
          </Button>
        </TextContainer>
      </Section>
    </Container>
  );
}
