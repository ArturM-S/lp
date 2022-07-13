import { useRouter } from 'next/router';
import { Button } from '../../Global/Button';
import { Section } from '../../Global/Section';

import {
  Banner,
  TextContainer,
  Title,
  Subtitle,
  BannerContainer,
  Container,
} from './styles';

export function Presentation() {
  const { push } = useRouter();

  return (
    <Container>
      <Section variant="white">
        <TextContainer>
          <Title>Crie sua visibilidade digital!</Title>

          <Subtitle>
            Consolidar sua imagem no mundo digital, melhora a comunicação com o
            usuario e gera autoridade no assunto!
          </Subtitle>

          <Subtitle>
            Seja para seu negócio ou pessoal, peça aqui sua pagina na web com
            foco no seu propósito.
          </Subtitle>
        </TextContainer>

        <BannerContainer>
          <Banner src="/assets/essa.png" />
          <Button
            onClick={() =>
              push('https://api.whatsapp.com/send?phone=5527995192645')
            }
            variant="filled"
          >
            Contato
          </Button>
        </BannerContainer>
      </Section>
    </Container>
  );
}
