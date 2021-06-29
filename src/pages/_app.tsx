/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalReset from '../styles/global';
import theme from '../styles/theme';

// eslint-disable-next-line no-undef
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Rick e Morty</title>
    </Head>

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalReset />
    </ThemeProvider>
  </>
);

export default MyApp;
