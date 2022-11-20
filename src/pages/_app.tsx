import { useEffect } from 'react';
import { ReactTagManager } from 'react-gtm-ts';

import { NextPageWithLayout } from '@Core/types/next';
import type { AppProps } from 'next/app';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

ReactTagManager.init('GTM-NGV448C');

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    window.addEventListener('load', (event) => {
      console.log(event);
    });

    window.addEventListener('fecth', (event) => {
      console.log(event);
    });

    window.addEventListener('fetch', function (event) {
      console.log(event);
    });
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
