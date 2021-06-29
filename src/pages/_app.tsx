/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';

// eslint-disable-next-line no-undef
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Rick e Morty</title>
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
