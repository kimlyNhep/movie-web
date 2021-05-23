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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CharacterInput = {
  id: Scalars['String'];
  role: Scalars['String'];
};

export type CreateMovieInformationInput = {
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  durations?: Maybe<Scalars['Int']>;
  released_date?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
  characters?: Maybe<Array<CharacterInput>>;
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
};

export type CreateMovieInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
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
  movies?: Maybe<Array<Movie>>;
};

export type GenreResponse = {
  __typename?: 'GenreResponse';
  genre?: Maybe<Genre>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type GenresResponse = {
  __typename?: 'GenresResponse';
  genres?: Maybe<Array<Genre>>;
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
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  creator: User;
  info?: Maybe<MovieInfo>;
  genres: Array<Genre>;
  ratingMovies?: Maybe<Array<RatingMovies>>;
};

export type MovieCharacters = {
  __typename?: 'MovieCharacters';
  characters: User;
  movieInfo: MovieInfo;
  role?: Maybe<Scalars['String']>;
};

export type MovieInfo = {
  __typename?: 'MovieInfo';
  id: Scalars['String'];
  type: Scalars['String'];
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  released_date?: Maybe<Scalars['String']>;
  movie: Movie;
  movieCharacters?: Maybe<Array<MovieCharacters>>;
};

export type MovieInfoResponse = {
  __typename?: 'MovieInfoResponse';
  info?: Maybe<MovieInfo>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type MovieResponse = {
  __typename?: 'MovieResponse';
  movie?: Maybe<Movie>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export enum MovieType {
  Tv = 'Tv',
  Movie = 'Movie'
}

export type MovieUploadResponse = {
  __typename?: 'MovieUploadResponse';
  imageUrl?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type MoviesResponse = {
  __typename?: 'MoviesResponse';
  movies?: Maybe<Array<Movie>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadMoviePhoto: MovieUploadResponse;
  createGenre: GenreResponse;
  register: RegisterResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  createCharacter: RegisterResponse;
  updateMovieInfo: MovieInfoResponse;
  updateMovie: MovieResponse;
  createMovie: MovieResponse;
  createMovieInformation: MovieInfoResponse;
  ratingMovie: MovieResponse;
};


export type MutationUploadMoviePhotoArgs = {
  photo: Scalars['Upload'];
  id: Scalars['String'];
};


export type MutationCreateGenreArgs = {
  name: Scalars['String'];
};


export type MutationRegisterArgs = {
  photo?: Maybe<Scalars['Upload']>;
  options: UserRegisterInput;
};


export type MutationLoginArgs = {
  options: UserLoginInput;
};


export type MutationCreateCharacterArgs = {
  photo: Scalars['Upload'];
  options: UserRegisterInput;
};


export type MutationUpdateMovieInfoArgs = {
  options: UpdateMovieInformationInput;
};


export type MutationUpdateMovieArgs = {
  options: UpdateMovieInput;
};


export type MutationCreateMovieArgs = {
  options: CreateMovieInput;
};


export type MutationCreateMovieInformationArgs = {
  options: CreateMovieInformationInput;
};


export type MutationRatingMovieArgs = {
  option: RatingInput;
};

export type Query = {
  __typename?: 'Query';
  getGenres: GenresResponse;
  me?: Maybe<User>;
  getAllCharacter: UsersResponse;
  getMovie: MovieResponse;
  getMovies: MoviesResponse;
};


export type QueryGetMovieArgs = {
  id: Scalars['String'];
};

export type RatingInput = {
  ratedPoint: Scalars['Int'];
  movieId: Scalars['String'];
};

export type RatingMovies = {
  __typename?: 'RatingMovies';
  user: User;
  movie: Movie;
  ratedPoint: Scalars['Int'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export enum StatusType {
  Completed = 'Completed',
  Ongoing = 'Ongoing'
}

export type UpdateMovieInformationInput = {
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  durations?: Maybe<Scalars['Int']>;
  released_date?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
  characters?: Maybe<Array<CharacterInput>>;
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  role: Scalars['String'];
  movies: Array<Movie>;
  photo?: Maybe<Scalars['String']>;
  movieCharacters?: Maybe<Array<MovieCharacters>>;
  ratingMovies?: Maybe<Array<RatingMovies>>;
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
  Admin = 'Admin',
  Member = 'Member',
  Character = 'Character'
}

export type UsersResponse = {
  __typename?: 'UsersResponse';
  users?: Maybe<Array<User>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type ErrorFragmentFragment = (
  { __typename?: 'ErrorResponse' }
  & Pick<ErrorResponse, 'message' | 'field'>
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'role'>
);

export type CreateGenreMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateGenreMutation = (
  { __typename?: 'Mutation' }
  & { createGenre: (
    { __typename?: 'GenreResponse' }
    & { genre?: Maybe<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'id' | 'name'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = (
  { __typename?: 'Query' }
  & { getGenres: (
    { __typename?: 'GenresResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, genres?: Maybe<Array<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'id' | 'name'>
    )>> }
  ) }
);

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateMovieMutation = (
  { __typename?: 'Mutation' }
  & { createMovie: (
    { __typename?: 'MovieResponse' }
    & { movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'title' | 'description'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type CreateMovieInformationMutationVariables = Exact<{
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  durations?: Maybe<Scalars['Int']>;
  releasedDate?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
  characters: Array<CharacterInput> | CharacterInput;
}>;


export type CreateMovieInformationMutation = (
  { __typename?: 'Mutation' }
  & { createMovieInformation: (
    { __typename?: 'MovieInfoResponse' }
    & { info?: Maybe<(
      { __typename?: 'MovieInfo' }
      & Pick<MovieInfo, 'id' | 'duration' | 'episode' | 'producer' | 'released_date' | 'status' | 'type'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type RatingMovieMutationVariables = Exact<{
  ratedPoint: Scalars['Int'];
  movieId: Scalars['String'];
}>;


export type RatingMovieMutation = (
  { __typename?: 'Mutation' }
  & { ratingMovie: (
    { __typename?: 'MovieResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'title' | 'description' | 'photo'>
    )> }
  ) }
);

export type UpdateMovieMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  genres: Array<Scalars['String']> | Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateMovieMutation = (
  { __typename?: 'Mutation' }
  & { updateMovie: (
    { __typename?: 'MovieResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'description' | 'photo' | 'title'>
    )> }
  ) }
);

export type UpdateMovieInformationMutationVariables = Exact<{
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  durations?: Maybe<Scalars['Int']>;
  releasedDate?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
  characters: Array<CharacterInput> | CharacterInput;
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
}>;


export type UpdateMovieInformationMutation = (
  { __typename?: 'Mutation' }
  & { updateMovieInfo: (
    { __typename?: 'MovieInfoResponse' }
    & { info?: Maybe<(
      { __typename?: 'MovieInfo' }
      & Pick<MovieInfo, 'id' | 'duration' | 'episode' | 'producer' | 'released_date' | 'status' | 'type' | 'synopsis' | 'backgroundInfo'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type UploadMoviePhotoMutationVariables = Exact<{
  id: Scalars['String'];
  photo: Scalars['Upload'];
}>;


export type UploadMoviePhotoMutation = (
  { __typename?: 'Mutation' }
  & { uploadMoviePhoto: (
    { __typename?: 'MovieUploadResponse' }
    & Pick<MovieUploadResponse, 'imageUrl'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>> }
  ) }
);

export type CreateCharacterMutationVariables = Exact<{
  photo: Scalars['Upload'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateCharacterMutation = (
  { __typename?: 'Mutation' }
  & { createCharacter: (
    { __typename?: 'RegisterResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'photo' | 'email'>
    )> }
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
      & UserFragmentFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
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
      & UserFragmentFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type GetMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMovieQuery = (
  { __typename?: 'Query' }
  & { getMovie: (
    { __typename?: 'MovieResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'description' | 'title' | 'photo'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'email' | 'role'>
      ), genres: Array<(
        { __typename?: 'Genre' }
        & Pick<Genre, 'id' | 'name'>
      )>, info?: Maybe<(
        { __typename?: 'MovieInfo' }
        & Pick<MovieInfo, 'id' | 'producer' | 'released_date' | 'status' | 'type' | 'episode' | 'duration' | 'synopsis' | 'backgroundInfo'>
        & { movieCharacters?: Maybe<Array<(
          { __typename?: 'MovieCharacters' }
          & Pick<MovieCharacters, 'role'>
          & { characters: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'photo'>
          ) }
        )>> }
      )>, ratingMovies?: Maybe<Array<(
        { __typename?: 'RatingMovies' }
        & Pick<RatingMovies, 'ratedPoint'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'photo' | 'email'>
        ) }
      )>> }
    )> }
  ) }
);

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = (
  { __typename?: 'Query' }
  & { getMovies: (
    { __typename?: 'MoviesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movies?: Maybe<Array<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'description' | 'photo' | 'title' | 'id'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<User, 'email' | 'username' | 'id' | 'role'>
      ), genres: Array<(
        { __typename?: 'Genre' }
        & Pick<Genre, 'name' | 'id'>
      )>, info?: Maybe<(
        { __typename?: 'MovieInfo' }
        & Pick<MovieInfo, 'id' | 'duration' | 'episode' | 'producer' | 'released_date' | 'status' | 'type' | 'backgroundInfo' | 'synopsis'>
        & { movieCharacters?: Maybe<Array<(
          { __typename?: 'MovieCharacters' }
          & Pick<MovieCharacters, 'role'>
          & { characters: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'photo'>
          ) }
        )>> }
      )> }
    )>> }
  ) }
);

export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & { getAllCharacter: (
    { __typename?: 'UsersResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, users?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'photo'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'photo' | 'role' | 'username' | 'email'>
  )> }
);

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
    genre {
      id
      name
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateGenreMutationFn = Apollo.MutationFunction<CreateGenreMutation, CreateGenreMutationVariables>;

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
export function useCreateGenreMutation(baseOptions?: Apollo.MutationHookOptions<CreateGenreMutation, CreateGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGenreMutation, CreateGenreMutationVariables>(CreateGenreDocument, options);
      }
export type CreateGenreMutationHookResult = ReturnType<typeof useCreateGenreMutation>;
export type CreateGenreMutationResult = Apollo.MutationResult<CreateGenreMutation>;
export type CreateGenreMutationOptions = Apollo.BaseMutationOptions<CreateGenreMutation, CreateGenreMutationVariables>;
export const GetGenresDocument = gql`
    query GetGenres {
  getGenres {
    errors {
      field
      message
    }
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
export function useGetGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
      }
export function useGetGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
        }
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>;
export type GetGenresQueryResult = Apollo.QueryResult<GetGenresQuery, GetGenresQueryVariables>;
export const CreateMovieDocument = gql`
    mutation CreateMovie($title: String!, $description: String, $genres: [String!]!) {
  createMovie(
    options: {title: $title, description: $description, genres: $genres}
  ) {
    movie {
      id
      title
      description
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

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
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const CreateMovieInformationDocument = gql`
    mutation CreateMovieInformation($type: MovieType!, $producer: String, $episode: Int, $status: StatusType!, $durations: Int, $releasedDate: String, $movie: String!, $characters: [CharacterInput!]!) {
  createMovieInformation(
    options: {type: $type, producer: $producer, episode: $episode, status: $status, durations: $durations, released_date: $releasedDate, movie: $movie, characters: $characters}
  ) {
    info {
      id
      duration
      episode
      producer
      released_date
      status
      type
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateMovieInformationMutationFn = Apollo.MutationFunction<CreateMovieInformationMutation, CreateMovieInformationMutationVariables>;

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
 *      durations: // value for 'durations'
 *      releasedDate: // value for 'releasedDate'
 *      movie: // value for 'movie'
 *      characters: // value for 'characters'
 *   },
 * });
 */
export function useCreateMovieInformationMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieInformationMutation, CreateMovieInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieInformationMutation, CreateMovieInformationMutationVariables>(CreateMovieInformationDocument, options);
      }
export type CreateMovieInformationMutationHookResult = ReturnType<typeof useCreateMovieInformationMutation>;
export type CreateMovieInformationMutationResult = Apollo.MutationResult<CreateMovieInformationMutation>;
export type CreateMovieInformationMutationOptions = Apollo.BaseMutationOptions<CreateMovieInformationMutation, CreateMovieInformationMutationVariables>;
export const RatingMovieDocument = gql`
    mutation RatingMovie($ratedPoint: Int!, $movieId: String!) {
  ratingMovie(option: {ratedPoint: $ratedPoint, movieId: $movieId}) {
    errors {
      field
      message
    }
    movie {
      id
      title
      description
      photo
    }
  }
}
    `;
export type RatingMovieMutationFn = Apollo.MutationFunction<RatingMovieMutation, RatingMovieMutationVariables>;

/**
 * __useRatingMovieMutation__
 *
 * To run a mutation, you first call `useRatingMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRatingMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ratingMovieMutation, { data, loading, error }] = useRatingMovieMutation({
 *   variables: {
 *      ratedPoint: // value for 'ratedPoint'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useRatingMovieMutation(baseOptions?: Apollo.MutationHookOptions<RatingMovieMutation, RatingMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RatingMovieMutation, RatingMovieMutationVariables>(RatingMovieDocument, options);
      }
export type RatingMovieMutationHookResult = ReturnType<typeof useRatingMovieMutation>;
export type RatingMovieMutationResult = Apollo.MutationResult<RatingMovieMutation>;
export type RatingMovieMutationOptions = Apollo.BaseMutationOptions<RatingMovieMutation, RatingMovieMutationVariables>;
export const UpdateMovieDocument = gql`
    mutation UpdateMovie($id: String!, $title: String!, $genres: [String!]!, $description: String) {
  updateMovie(
    options: {id: $id, title: $title, genres: $genres, description: $description}
  ) {
    errors {
      field
      message
    }
    movie {
      id
      description
      photo
      title
    }
  }
}
    `;
export type UpdateMovieMutationFn = Apollo.MutationFunction<UpdateMovieMutation, UpdateMovieMutationVariables>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      genres: // value for 'genres'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateMovieMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieMutation, UpdateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, options);
      }
export type UpdateMovieMutationHookResult = ReturnType<typeof useUpdateMovieMutation>;
export type UpdateMovieMutationResult = Apollo.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = Apollo.BaseMutationOptions<UpdateMovieMutation, UpdateMovieMutationVariables>;
export const UpdateMovieInformationDocument = gql`
    mutation UpdateMovieInformation($type: MovieType!, $producer: String, $episode: Int, $status: StatusType!, $durations: Int, $releasedDate: String, $movie: String!, $characters: [CharacterInput!]!, $synopsis: String, $backgroundInfo: String) {
  updateMovieInfo(
    options: {type: $type, producer: $producer, episode: $episode, status: $status, durations: $durations, released_date: $releasedDate, movie: $movie, characters: $characters, synopsis: $synopsis, backgroundInfo: $backgroundInfo}
  ) {
    info {
      id
      duration
      episode
      producer
      released_date
      status
      type
      synopsis
      backgroundInfo
    }
    errors {
      ...ErrorFragment
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type UpdateMovieInformationMutationFn = Apollo.MutationFunction<UpdateMovieInformationMutation, UpdateMovieInformationMutationVariables>;

/**
 * __useUpdateMovieInformationMutation__
 *
 * To run a mutation, you first call `useUpdateMovieInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieInformationMutation, { data, loading, error }] = useUpdateMovieInformationMutation({
 *   variables: {
 *      type: // value for 'type'
 *      producer: // value for 'producer'
 *      episode: // value for 'episode'
 *      status: // value for 'status'
 *      durations: // value for 'durations'
 *      releasedDate: // value for 'releasedDate'
 *      movie: // value for 'movie'
 *      characters: // value for 'characters'
 *      synopsis: // value for 'synopsis'
 *      backgroundInfo: // value for 'backgroundInfo'
 *   },
 * });
 */
export function useUpdateMovieInformationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieInformationMutation, UpdateMovieInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieInformationMutation, UpdateMovieInformationMutationVariables>(UpdateMovieInformationDocument, options);
      }
export type UpdateMovieInformationMutationHookResult = ReturnType<typeof useUpdateMovieInformationMutation>;
export type UpdateMovieInformationMutationResult = Apollo.MutationResult<UpdateMovieInformationMutation>;
export type UpdateMovieInformationMutationOptions = Apollo.BaseMutationOptions<UpdateMovieInformationMutation, UpdateMovieInformationMutationVariables>;
export const UploadMoviePhotoDocument = gql`
    mutation UploadMoviePhoto($id: String!, $photo: Upload!) {
  uploadMoviePhoto(id: $id, photo: $photo) {
    errors {
      field
      message
    }
    imageUrl
  }
}
    `;
export type UploadMoviePhotoMutationFn = Apollo.MutationFunction<UploadMoviePhotoMutation, UploadMoviePhotoMutationVariables>;

/**
 * __useUploadMoviePhotoMutation__
 *
 * To run a mutation, you first call `useUploadMoviePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMoviePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMoviePhotoMutation, { data, loading, error }] = useUploadMoviePhotoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      photo: // value for 'photo'
 *   },
 * });
 */
export function useUploadMoviePhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadMoviePhotoMutation, UploadMoviePhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMoviePhotoMutation, UploadMoviePhotoMutationVariables>(UploadMoviePhotoDocument, options);
      }
export type UploadMoviePhotoMutationHookResult = ReturnType<typeof useUploadMoviePhotoMutation>;
export type UploadMoviePhotoMutationResult = Apollo.MutationResult<UploadMoviePhotoMutation>;
export type UploadMoviePhotoMutationOptions = Apollo.BaseMutationOptions<UploadMoviePhotoMutation, UploadMoviePhotoMutationVariables>;
export const CreateCharacterDocument = gql`
    mutation CreateCharacter($photo: Upload!, $email: String!, $username: String!, $password: String!) {
  createCharacter(
    options: {email: $email, username: $username, password: $password}
    photo: $photo
  ) {
    errors {
      field
      message
    }
    user {
      id
      username
      photo
      email
    }
  }
}
    `;
export type CreateCharacterMutationFn = Apollo.MutationFunction<CreateCharacterMutation, CreateCharacterMutationVariables>;

/**
 * __useCreateCharacterMutation__
 *
 * To run a mutation, you first call `useCreateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacterMutation, { data, loading, error }] = useCreateCharacterMutation({
 *   variables: {
 *      photo: // value for 'photo'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateCharacterMutation(baseOptions?: Apollo.MutationHookOptions<CreateCharacterMutation, CreateCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCharacterMutation, CreateCharacterMutationVariables>(CreateCharacterDocument, options);
      }
export type CreateCharacterMutationHookResult = ReturnType<typeof useCreateCharacterMutation>;
export type CreateCharacterMutationResult = Apollo.MutationResult<CreateCharacterMutation>;
export type CreateCharacterMutationOptions = Apollo.BaseMutationOptions<CreateCharacterMutation, CreateCharacterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
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
${ErrorFragmentFragmentDoc}`;
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

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
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $role: UserRoles) {
  register(
    options: {email: $email, username: $username, password: $password, role: $role}
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
${ErrorFragmentFragmentDoc}`;
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
export const GetMovieDocument = gql`
    query GetMovie($id: String!) {
  getMovie(id: $id) {
    errors {
      field
      message
    }
    movie {
      id
      description
      title
      photo
      creator {
        id
        username
        email
        role
      }
      genres {
        id
        name
      }
      info {
        id
        producer
        released_date
        status
        type
        episode
        duration
        synopsis
        backgroundInfo
        movieCharacters {
          role
          characters {
            id
            username
            photo
          }
        }
      }
      ratingMovies {
        user {
          id
          username
          photo
          email
        }
        ratedPoint
      }
    }
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const GetMoviesDocument = gql`
    query GetMovies {
  getMovies {
    errors {
      field
      message
    }
    movies {
      creator {
        email
        username
        id
        role
      }
      genres {
        name
        id
      }
      description
      photo
      title
      id
      info {
        id
        duration
        episode
        producer
        released_date
        status
        type
        backgroundInfo
        synopsis
        movieCharacters {
          role
          characters {
            id
            username
            photo
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetCharactersDocument = gql`
    query GetCharacters {
  getAllCharacter {
    errors {
      field
      message
    }
    users {
      id
      username
      photo
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    photo
    role
    username
    email
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
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;