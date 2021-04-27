import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Float'];
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
  Movie = 'MOVIE'
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
  getGenres: GenreResponse;
  me: User;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export enum StatusType {
  Completed = 'COMPLETED',
  Ongoing = 'ONGOING'
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
  Member = 'MEMBER'
}

export type ErrorFragmentFragment = (
  { __typename?: 'ErrorResponse' }
  & Pick<ErrorResponse, 'message' | 'field'>
);

export type CreateGenreMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateGenreMutation = (
  { __typename?: 'Mutation' }
  & { createGenre: (
    { __typename?: 'GenreResponse' }
    & Pick<GenreResponse, 'message'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = (
  { __typename?: 'Query' }
  & { getGenres: (
    { __typename?: 'GenreResponse' }
    & { genres?: Maybe<Array<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'name'>
    )>> }
  ) }
);

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  photo: Scalars['String'];
  creator: Scalars['String'];
  genres: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateMovieMutation = (
  { __typename?: 'Mutation' }
  & { createMovie: (
    { __typename?: 'MovieResponse' }
    & Pick<MovieResponse, 'message'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type CreateMovieInformationMutationVariables = Exact<{
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode: Scalars['Int'];
  status: StatusType;
  duration: Scalars['Int'];
  releasedDate?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
}>;


export type CreateMovieInformationMutation = (
  { __typename?: 'Mutation' }
  & { createMovieInformation: (
    { __typename?: 'MovieResponse' }
    & Pick<MovieResponse, 'message'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'role'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<UserRoles>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'role'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'role'>
  ) }
);

export const ErrorFragmentFragmentDoc = gql`
    fragment ErrorFragment on ErrorResponse {
  message
  field
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
    ${ErrorFragmentFragmentDoc}`;

export function useCreateGenreMutation() {
  return Urql.useMutation<CreateGenreMutation, CreateGenreMutationVariables>(CreateGenreDocument);
};
export const GetGenresDocument = gql`
    query GetGenres {
  getGenres {
    genres {
      name
    }
  }
}
    `;

export function useGetGenresQuery(options: Omit<Urql.UseQueryArgs<GetGenresQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGenresQuery>({ query: GetGenresDocument, ...options });
};
export const CreateMovieDocument = gql`
    mutation CreateMovie($title: String!, $description: String!, $photo: String!, $creator: String!, $genres: [String!]!) {
  createMovie(
    options: {title: $title, description: $description, photo: $photo, creator: $creator, genres: $genres}
  ) {
    message
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;

export function useCreateMovieMutation() {
  return Urql.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument);
};
export const CreateMovieInformationDocument = gql`
    mutation CreateMovieInformation($type: MovieType!, $producer: String, $episode: Int!, $status: StatusType!, $duration: Int!, $releasedDate: String, $movie: String!) {
  createMovieInformation(
    options: {type: $type, producer: $producer, episode: $episode, status: $status, duration: $duration, released_date: $releasedDate, movie: $movie}
  ) {
    message
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;

export function useCreateMovieInformationMutation() {
  return Urql.useMutation<CreateMovieInformationMutation, CreateMovieInformationMutationVariables>(CreateMovieInformationDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    accessToken
    user {
      id
      username
      email
      role
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $role: UserRoles) {
  register(
    options: {email: $email, username: $username, password: $password, role: $role}
  ) {
    user {
      id
      username
      email
      role
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
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

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};