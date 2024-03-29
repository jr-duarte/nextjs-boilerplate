import { ReactTagManager } from 'react-gtm-ts';

import { NextPageWithLayout } from '@Core/types/next';
import type { AppProps } from 'next/app';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

ReactTagManager.init('GTM-NGV448C');

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}
export default MyApp;
