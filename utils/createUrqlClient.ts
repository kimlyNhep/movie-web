import {
  LoginMutation,
  MeQuery,
  MeDocument,
  LogoutMutation,
} from './../src/generated/graphql';
import { dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import Cookie from 'js-cookie';
import { betterUpdateQuery } from './helpers';

export const createUrqlClient = (ssrExchange: any) => {
  const token = Cookie.get('token');

  let serverLink;

  if (process.env.NODE_ENV === 'production')
    serverLink = 'https://movie-academy.herokuapp.com/graphql';
  else serverLink = 'http://127.0.0.1:8000/graphql';

  return {
    url: serverLink,
    fetchOptions: {
      credentials: 'include' as const,
      headers: {
        Authorization: `Beaer ${token}`,
      },
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            login: (_result, _args, cache, _info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
            },
            logout: (_result, _args, cache, _info) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                {
                  query: MeDocument,
                },
                _result,
                () => ({
                  me: null,
                })
              );
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
