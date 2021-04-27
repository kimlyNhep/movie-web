import { LoginMutation, MeQuery, MeDocument } from './../src/generated/graphql';
import { dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import Cookie from 'js-cookie';
import { betterUpdateQuery } from './helpers';

export const createUrqlClient = (ssrExchange: any) => {
  const token = Cookie.get('token');

  return {
    url: 'http://localhost:8000/graphql',
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
            login: (_result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    console.log(result);
                    return {
                      me: result.login.user!,
                    };
                  }
                }
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
