import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';

import { globalStyles } from '../../shared/styles';
import { AppLayout } from '../layout/AppLayout';

const cache = createCache({ key: 'next' });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <CacheProvider value={cache}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={asPath}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {globalStyles}
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </motion.div>
      </AnimatePresence>
    </CacheProvider>
  );
}
