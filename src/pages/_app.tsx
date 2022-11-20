import { ReactTagManager } from 'react-gtm-ts';

import { NextPageWithLayout } from '@Core/types/next';
import type { AppProps } from 'next/app';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  ReactTagManager.init('GTM-NGV448C');
  return <Component {...pageProps} />;
}
export default MyApp;
