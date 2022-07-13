import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Container } from '../../shared/pages/home.styles';
import { Carrousel } from '../components/Home/Carrousel';
import { MobileCarrousel } from '../components/Home/MobileCarrousel';
import { Presentation } from '../components/Home/Presentation';
import { Summary } from '../components/Home/Summary';
import { Market } from '../components/Home/Market';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  const width = useWindowWidth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, [width]);

  return (
    <Container>
      <Presentation />
      <Summary />
      <Market />
      {screenWidth < 800 ? <MobileCarrousel /> : <Carrousel />}
    </Container>
  );
}
