import '../../styles/globals.css';
import 'antd/dist/antd.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';
import Cookie from 'js-cookie';
import { createUploadLink } from 'apollo-upload-client';

function MyApp({ Component, pageProps }: AppProps) {
  const token = Cookie.get('token');

  let link;
  if (process.env.NODE_ENV === 'production')
    link = createUploadLink({
      uri: 'https://movie-academy.herokuapp.com/graphql',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  else
    link = createUploadLink({
      uri: 'http://127.0.0.1:8000/graphql',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const client = new ApolloClient({
    ssrMode: true,
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
