import type { AppProps } from 'next/app';
import { Provider, createClient } from 'urql';
import '../../styles/globals.css';
import 'antd/dist/antd.css';

const client = createClient({
  url: 'http://localhost:8000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
