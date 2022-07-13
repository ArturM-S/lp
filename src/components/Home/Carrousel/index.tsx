import { useEffect, useRef, useState } from 'react';
import { IoChevronForwardCircle, IoChevronBackCircle } from 'react-icons/io5';
import { cards } from '../../../utils/CardsArray';
import { Section } from '../../Global/Section';

import {
  Container,
  LimitRight,
  LimitLeft,
  Content,
  Icon,
  Header,
  Title,
  Legend,
  Description,
  ButtonLeftBox,
  ButtonRightBox,
} from './styles';

export function Carrousel() {
  const [position, setPosition] = useState(50);
  const [screenWidth, setScreenWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }

    setCardWidth(cardRef.current.offsetWidth);
  }, []);

  const handlePositionRight = () => {
    setPosition(position + cardWidth);
    if (position === 0) {
      setPosition(0);
    }
  };

  const handlePositionLeft = () => {
    setPosition(position - cardWidth);
    if (position <= (-cardWidth * cards.length) / 2) {
      setPosition(50);
    }
  };

  return (
    <Section variant="white">
      <Container>
        {position === 50 ? (
          <div />
        ) : (
          <ButtonLeftBox>
            <IoChevronBackCircle size={32.5} onClick={handlePositionRight} />
          </ButtonLeftBox>
        )}
        <ButtonRightBox>
          <IoChevronForwardCircle size={32.5} onClick={handlePositionLeft} />
        </ButtonRightBox>

        <LimitRight />
        {cards.map(card => {
          return (
            <Content key={card.title} ref={cardRef} position={position}>
              <Icon>
                <img src={`/assets/${card.icon}`} alt="" />
              </Icon>
              <Header>
                <Title>{card.title}</Title>
                <Legend>{card.type}</Legend>
              </Header>
              <Description>{card.description}</Description>
            </Content>
          );
        })}
        <LimitLeft />
      </Container>
    </Section>
  );
}
