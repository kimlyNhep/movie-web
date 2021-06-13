import '../../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import withClient from '../apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withClient(MyApp);
