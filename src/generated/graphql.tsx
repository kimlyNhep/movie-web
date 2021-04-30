import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateMovieInformationInput = {
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  duration?: Maybe<Scalars['Int']>;
  released_date?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
};

export type CreateMovieInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GenreResponse = {
  __typename?: 'GenreResponse';
  genres?: Maybe<Array<Genre>>;
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  photo: Scalars['String'];
  creator: User;
  info?: Maybe<MovieInfo>;
};

export type MovieInfo = {
  __typename?: 'MovieInfo';
  id: Scalars['Int'];
  type: Scalars['String'];
  producer?: Maybe<Scalars['String']>;
  episode: Scalars['Int'];
  status: StatusType;
  duration: Scalars['Int'];
  released_date?: Maybe<Scalars['String']>;
  movie: Movie;
};

export type MovieResponse = {
  __typename?: 'MovieResponse';
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export enum MovieType {
  Tv = 'TV',
  Movie = 'MOVIE',
}

export type Mutation = {
  __typename?: 'Mutation';
  createMovie: MovieResponse;
  createMovieInformation: MovieResponse;
  addMoviePhoto: Scalars['Boolean'];
  createGenre: GenreResponse;
  register: RegisterResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
};

export type MutationCreateMovieArgs = {
  options: CreateMovieInput;
};

export type MutationCreateMovieInformationArgs = {
  options: CreateMovieInformationInput;
};

export type MutationAddMoviePhotoArgs = {
  photo: Upload;
};

export type MutationCreateGenreArgs = {
  name: Scalars['String'];
};

export type MutationRegisterArgs = {
  options: UserRegisterInput;
};

export type MutationLoginArgs = {
  options: UserLoginInput;
};

export type Query = {
  __typename?: 'Query';
  test?: Maybe<User>;
  getGenres: GenreResponse;
  me?: Maybe<User>;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export enum StatusType {
  Completed = 'COMPLETED',
  Ongoing = 'ONGOING',
}

export type Upload = {
  filename: Scalars['String'];
  mimeType: Scalars['String'];
  encoding: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  role: Scalars['String'];
  movies: Array<Movie>;
};

export type UserLoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  role?: Maybe<UserRoles>;
  password: Scalars['String'];
};

export enum UserRoles {
  Admin = 'ADMIN',
  Member = 'MEMBER',
}

export type ErrorFragmentFragment = { __typename?: 'ErrorResponse' } & Pick<
  ErrorResponse,
  'message' | 'field'
>;

export type UserFragmentFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'username' | 'email' | 'role'
>;

export type CreateGenreMutationVariables = Exact<{
  name: Scalars['String'];
}>;

export type CreateGenreMutation = { __typename?: 'Mutation' } & {
  createGenre: { __typename?: 'GenreResponse' } & Pick<
    GenreResponse,
    'message'
  > & {
      errors?: Maybe<
        Array<{ __typename?: 'ErrorResponse' } & ErrorFragmentFragment>
      >;
    };
};

export type GetGenresQueryVariables = Exact<{ [key: string]: never }>;

export type GetGenresQuery = { __typename?: 'Query' } & {
  getGenres: { __typename?: 'GenreResponse' } & {
    genres?: Maybe<
      Array<{ __typename?: 'Genre' } & Pick<Genre, 'id' | 'name'>>
    >;
  };
};

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']> | Scalars['String'];
}>;

export type CreateMovieMutation = { __typename?: 'Mutation' } & {
  createMovie: { __typename?: 'MovieResponse' } & Pick<
    MovieResponse,
    'message'
  > & {
      errors?: Maybe<
        Array<{ __typename?: 'ErrorResponse' } & ErrorFragmentFragment>
      >;
    };
};

export type CreateMovieInformationMutationVariables = Exact<{
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode: Scalars['Int'];
  status: StatusType;
  duration: Scalars['Int'];
  releasedDate?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
}>;

export type CreateMovieInformationMutation = { __typename?: 'Mutation' } & {
  createMovieInformation: { __typename?: 'MovieResponse' } & Pick<
    MovieResponse,
    'message'
  > & {
      errors?: Maybe<
        Array<{ __typename?: 'ErrorResponse' } & ErrorFragmentFragment>
      >;
    };
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'LoginResponse' } & Pick<
    LoginResponse,
    'accessToken'
  > & {
      user?: Maybe<{ __typename?: 'User' } & UserFragmentFragment>;
      errors?: Maybe<
        Array<{ __typename?: 'ErrorResponse' } & ErrorFragmentFragment>
      >;
    };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'logout'
>;

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<UserRoles>;
}>;

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'RegisterResponse' } & {
    user?: Maybe<{ __typename?: 'User' } & UserFragmentFragment>;
    errors?: Maybe<
      Array<{ __typename?: 'ErrorResponse' } & ErrorFragmentFragment>
    >;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'username' | 'email' | 'role'>
  >;
};

export const ErrorFragmentFragmentDoc = gql`
  fragment ErrorFragment on ErrorResponse {
    message
    field
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    username
    email
    role
  }
`;
export const CreateGenreDocument = gql`
  mutation CreateGenre($name: String!) {
    createGenre(name: $name) {
      message
      errors {
        ...ErrorFragment
      }
    }
  }
  ${ErrorFragmentFragmentDoc}
`;
export type CreateGenreMutationFn = Apollo.MutationFunction<
  CreateGenreMutation,
  CreateGenreMutationVariables
>;

/**
 * __useCreateGenreMutation__
 *
 * To run a mutation, you first call `useCreateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGenreMutation, { data, loading, error }] = useCreateGenreMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateGenreMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGenreMutation,
    CreateGenreMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateGenreMutation, CreateGenreMutationVariables>(
    CreateGenreDocument,
    options
  );
}
export type CreateGenreMutationHookResult = ReturnType<
  typeof useCreateGenreMutation
>;
export type CreateGenreMutationResult = Apollo.MutationResult<CreateGenreMutation>;
export type CreateGenreMutationOptions = Apollo.BaseMutationOptions<
  CreateGenreMutation,
  CreateGenreMutationVariables
>;
export const GetGenresDocument = gql`
  query GetGenres {
    getGenres {
      genres {
        id
        name
      }
    }
  }
`;

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(
  baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(
    GetGenresDocument,
    options
  );
}
export function useGetGenresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGenresQuery,
    GetGenresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(
    GetGenresDocument,
    options
  );
}
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<
  typeof useGetGenresLazyQuery
>;
export type GetGenresQueryResult = Apollo.QueryResult<
  GetGenresQuery,
  GetGenresQueryVariables
>;
export const CreateMovieDocument = gql`
  mutation CreateMovie(
    $title: String!
    $description: String
    $photo: String
    $genres: [String!]!
  ) {
    createMovie(
      options: {
        title: $title
        description: $description
        photo: $photo
        genres: $genres
      }
    ) {
      message
      errors {
        ...ErrorFragment
      }
    }
  }
  ${ErrorFragmentFragmentDoc}
`;
export type CreateMovieMutationFn = Apollo.MutationFunction<
  CreateMovieMutation,
  CreateMovieMutationVariables
>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      photo: // value for 'photo'
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useCreateMovieMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMovieMutation,
    CreateMovieMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(
    CreateMovieDocument,
    options
  );
}
export type CreateMovieMutationHookResult = ReturnType<
  typeof useCreateMovieMutation
>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<
  CreateMovieMutation,
  CreateMovieMutationVariables
>;
export const CreateMovieInformationDocument = gql`
  mutation CreateMovieInformation(
    $type: MovieType!
    $producer: String
    $episode: Int!
    $status: StatusType!
    $duration: Int!
    $releasedDate: String
    $movie: String!
  ) {
    createMovieInformation(
      options: {
        type: $type
        producer: $producer
        episode: $episode
        status: $status
        duration: $duration
        released_date: $releasedDate
        movie: $movie
      }
    ) {
      message
      errors {
        ...ErrorFragment
      }
    }
  }
  ${ErrorFragmentFragmentDoc}
`;
export type CreateMovieInformationMutationFn = Apollo.MutationFunction<
  CreateMovieInformationMutation,
  CreateMovieInformationMutationVariables
>;

/**
 * __useCreateMovieInformationMutation__
 *
 * To run a mutation, you first call `useCreateMovieInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieInformationMutation, { data, loading, error }] = useCreateMovieInformationMutation({
 *   variables: {
 *      type: // value for 'type'
 *      producer: // value for 'producer'
 *      episode: // value for 'episode'
 *      status: // value for 'status'
 *      duration: // value for 'duration'
 *      releasedDate: // value for 'releasedDate'
 *      movie: // value for 'movie'
 *   },
 * });
 */
export function useCreateMovieInformationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMovieInformationMutation,
    CreateMovieInformationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMovieInformationMutation,
    CreateMovieInformationMutationVariables
  >(CreateMovieInformationDocument, options);
}
export type CreateMovieInformationMutationHookResult = ReturnType<
  typeof useCreateMovieInformationMutation
>;
export type CreateMovieInformationMutationResult = Apollo.MutationResult<CreateMovieInformationMutation>;
export type CreateMovieInformationMutationOptions = Apollo.BaseMutationOptions<
  CreateMovieInformationMutation,
  CreateMovieInformationMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(options: { username: $username, password: $password }) {
      accessToken
      user {
        ...UserFragment
      }
      errors {
        ...ErrorFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register(
    $username: String!
    $email: String!
    $password: String!
    $role: UserRoles
  ) {
    register(
      options: {
        email: $email
        username: $username
        password: $password
        role: $role
      }
    ) {
      user {
        ...UserFragment
      }
      errors {
        ...ErrorFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      username
      email
      role
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
