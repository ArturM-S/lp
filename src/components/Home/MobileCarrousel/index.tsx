import { useState } from 'react';
import { IoChevronForwardCircle, IoChevronBackCircle } from 'react-icons/io5';
import { cards } from '../../../utils/CardsArray';
import { Section } from '../../Global/Section';

import {
  Container,
  Content,
  Icon,
  Header,
  Title,
  Legend,
  Description,
  ButtonLeftBox,
  ButtonRightBox,
} from './styles';

export function MobileCarrousel() {
  const [index, setIndex] = useState(1);
  const [currentObj, setCurrentObj] = useState(cards[0]);

  const handleImage = () => {
    setIndex(index + 1);
    if (index < cards.length) {
      setCurrentObj(cards[index]);
    } else {
      setIndex(1);
      setCurrentObj(cards[0]);
    }
  };

  return (
    <Container>
      <Section variant="white">
        <ButtonRightBox>
          <IoChevronForwardCircle size={18.5} onClick={handleImage} />
        </ButtonRightBox>
        <Content key={index}>
          <Icon>
            <img src={`/assets/${currentObj.icon}`} alt="" />
          </Icon>
          <Header>
            <Title>{currentObj.title}</Title>
            <Legend>{currentObj.type}</Legend>
          </Header>
          <Description>{currentObj.description}</Description>
        </Content>
        <ButtonLeftBox>
          <IoChevronBackCircle onClick={handleImage} size={18.5} />
        </ButtonLeftBox>
      </Section>
    </Container>
  );
}
