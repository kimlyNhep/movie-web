import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  episode: Scalars['Int'];
  status: StatusType;
  duration: Scalars['Int'];
  released_date?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
};

export type CreateMovieInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  creator: Scalars['String'];
  genres: Array<Scalars['String']>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GenreResponse = {
  __typename?: 'GenreResponse';
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
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
  createGenre: GenreResponse;
  register: RegisterResponse;
  login: LoginResponse;
};

export type MutationCreateMovieArgs = {
  options: CreateMovieInput;
};

export type MutationCreateMovieInformationArgs = {
  options: CreateMovieInformationInput;
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
  me: User;
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

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
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

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'LoginResponse' } & Pick<
    LoginResponse,
    'accessToken'
  > & {
      errors?: Maybe<
        Array<
          { __typename?: 'ErrorResponse' } & Pick<
            ErrorResponse,
            'field' | 'message'
          >
        >
      >;
    };
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<UserRoles>;
}>;

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'RegisterResponse' } & {
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'username'>>;
    errors?: Maybe<
      Array<
        { __typename?: 'ErrorResponse' } & Pick<
          ErrorResponse,
          'field' | 'message'
        >
      >
    >;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'username' | 'email' | 'role'>;
};

export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(options: { username: $username, password: $password }) {
      accessToken
      errors {
        field
        message
      }
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
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
        username
      }
      errors {
        field
        message
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const MeDocument = gql`
  query Me {
    me {
      username
      email
      role
    }
  }
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
