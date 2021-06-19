import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import Cookie from 'js-cookie';
import React from 'react';
import { TypedTypePolicies } from '../generated/apollo-helpers';

const withClient = <T extends object>(Component: React.ComponentType<T>) => (
  props: any
) => {
  const token = Cookie.get('token');
  let link;
  if (process.env.NODE_ENV === 'production')
    link = createUploadLink({
      uri: 'https://movie-academy.herokuapp.com/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
      credentials: 'include' as const,
    });
  else
    link = createUploadLink({
      uri: 'http://127.0.0.1:8000/graphql',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
      credentials: 'include' as const,
    });

  const typePolicies: TypedTypePolicies = {
    Query: {
      fields: {
        me: {
          read(me) {
            return me;
          },
        },
      },
    },
  };

  const client = new ApolloClient({
    ssrMode: false,
    link,
    cache: new InMemoryCache({
      typePolicies,
    }),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  );
};

export default withClient;
