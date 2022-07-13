import { Container, Divider, Item, Subtitle, Title } from './styles';

export function Summary() {
  return (
    <Container>
      <Item>
        <Title>25%</Title>
        <Subtitle>Aumento médio na taxa de conversão de</Subtitle>
      </Item>
      <Divider />

      <Item>
        <Title>SEO</Title>
        <Subtitle>Esteja à frente nas buscas</Subtitle>
      </Item>
      <Divider />

      <Item>
        <Title>Performance</Title>
        <Subtitle>
          0,1 segundos de carregamento diferem até 8% de conversão
        </Subtitle>
      </Item>
      <Divider />

      <Item>
        <Title>Criatividade</Title>
        <Subtitle>Suas ideia sob olhar especializado</Subtitle>
      </Item>
    </Container>
  );
}
