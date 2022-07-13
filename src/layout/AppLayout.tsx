import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { ResolvePageTitle } from '../utils/ResolvePageTitle';
import { Footer } from './Footer';
import { Header } from './Header';
import { Container, Content } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>AMS digital | {ResolvePageTitle(asPath)}</title>
      </Head>
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
}
