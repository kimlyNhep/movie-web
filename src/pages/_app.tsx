import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import Cookie from 'js-cookie';
import { createUploadLink } from 'apollo-upload-client';

function MyApp({ Component, pageProps }: AppProps) {
  const token = Cookie.get('token');

  const link = createUploadLink({
    uri: 'https://movie-academy.herokuapp.com/graphql',
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
