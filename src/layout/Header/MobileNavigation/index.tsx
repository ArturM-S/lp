import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Button } from '../../../components/Global/Button';
import { Container, Content, NavigationContainer, Item } from './styles';

export function MobileNavigation() {
  const { asPath, push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <IoMenu size={40} onClick={() => setIsOpen(true)} />

      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Content
            key="mobile-navigation-bar"
            initial={{
              opacity: 0,
              right: -80,
            }}
            animate={{
              opacity: 1,
              right: 0,
              transition: {
                duration: 0.6,
              },
            }}
            exit={{
              opacity: 0,
              right: -80,
              transition: {
                duration: 0.6,
              },
            }}
          >
            <IoClose size={40} onClick={() => setIsOpen(false)} />

            <NavigationContainer
              key="mobile-navigation-bar-content"
              initial={{
                opacity: 0,
                transform: 'translateX(80px)',
                left: '-100px',
              }}
              animate={{
                opacity: 1,
                transform: 'translateX(0px)',
                transition: {
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
                transform: 'translateX(80px)',
                transition: {
                  duration: 1,
                },
              }}
            >
              <Button onClick={() => push('https://carreiras.atw.delivery')}>
                Faça parte
              </Button>

              <Link href="/">
                <Item
                  isActive={asPath === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Item>
              </Link>

              <Link href="Sobre">
                <Item
                  isActive={asPath === '/Sobre'}
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </Item>
              </Link>
             
            </NavigationContainer>
          </Content>
        )}
      </AnimatePresence>
    </Container>
  );
}
