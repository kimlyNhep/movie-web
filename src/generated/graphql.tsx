import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GenreErrorResponse = {
  __typename?: 'GenreErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GenreResponse = {
  __typename?: 'GenreResponse';
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<GenreErrorResponse>>;
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

export type MovieErrorResponse = {
  __typename?: 'MovieErrorResponse';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
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
  errors?: Maybe<Array<MovieErrorResponse>>;
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
  hello: Scalars['String'];
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

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
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
      & Pick<User, 'username'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    accessToken
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $role: UserRoles) {
  register(
    options: {email: $email, username: $username, password: $password, role: $role}
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
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;