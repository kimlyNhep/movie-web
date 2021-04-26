import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'antd/dist/antd.css';
import { createClient, Provider } from 'urql';
import { CookiesProvider, useCookies } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  const [cookies] = useCookies(['qid']);
  const token = cookies.qid;

  const client = createClient({
    url: 'http://localhost:8000/graphql',
    fetchOptions: {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return (
    <Provider value={client}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
