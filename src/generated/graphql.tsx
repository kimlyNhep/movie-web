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

export type Character = {
  __typename?: 'Character';
  id: Scalars['String'];
  username: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  movieCharacters?: Maybe<Array<MovieCharacters>>;
};

export type CharacterInput = {
  id: Scalars['String'];
  role: Scalars['String'];
};

export type CharacterResponse = {
  __typename?: 'CharacterResponse';
  character?: Maybe<Character>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type CharactersResponse = {
  __typename?: 'CharactersResponse';
  characters?: Maybe<Array<Character>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  user: User;
  movie: Movie;
  text?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type CommentMovieInput = {
  id: Scalars['String'];
  comments: Scalars['String'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  comment?: Maybe<Comment>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type CommentWithPermission = {
  __typename?: 'CommentWithPermission';
  comment?: Maybe<Comment>;
  isEdit?: Maybe<Scalars['Boolean']>;
  isDelete?: Maybe<Scalars['Boolean']>;
};

export type CommentsResponse = {
  __typename?: 'CommentsResponse';
  comments?: Maybe<Array<CommentWithPermission>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type CreateMovieInformationInput = {
  type: MovieType;
  producer?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  status: StatusType;
  durations?: Maybe<Scalars['Int']>;
  released_date?: Maybe<Scalars['String']>;
  movie: Scalars['String'];
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
};

export type CreateMovieInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']>;
  characters?: Maybe<Array<CharacterInput>>;
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
  comment?: Maybe<Array<Comment>>;
  movieCharacters?: Maybe<Array<MovieCharacters>>;
  point?: Maybe<Scalars['Float']>;
  movieState?: Maybe<Array<MovieState>>;
  rank?: Maybe<Scalars['Int']>;
};

export type MovieCharacters = {
  __typename?: 'MovieCharacters';
  character: Character;
  movie: Movie;
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
};

export type MovieInfoResponse = {
  __typename?: 'MovieInfoResponse';
  info?: Maybe<MovieInfo>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type MovieRankingResponse = {
  __typename?: 'MovieRankingResponse';
  movies?: Maybe<Array<RankingType>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type MovieResponse = {
  __typename?: 'MovieResponse';
  movie?: Maybe<Movie>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type MovieState = {
  __typename?: 'MovieState';
  watching: Scalars['Int'];
  planToWatch: Scalars['Int'];
  completed: Scalars['Int'];
  drop: Scalars['Int'];
  user: User;
  movie: Movie;
};

export type MovieStateResponse = {
  __typename?: 'MovieStateResponse';
  movie?: Maybe<Movie>;
  user?: Maybe<User>;
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
  updateMovieState: MovieStateResponse;
  uploadMoviePhoto: MovieUploadResponse;
  createGenre: GenreResponse;
  register: RegisterResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  updateMovie: MovieResponse;
  createMovie: MovieResponse;
  ratingMovie: MovieResponse;
  createCharacter: CharacterResponse;
  updateMovieInfo: MovieInfoResponse;
  createMovieInformation: MovieInfoResponse;
  updateComment: CommentResponse;
  deleteComment: CommentResponse;
  commentMovies: MovieResponse;
};


export type MutationUpdateMovieStateArgs = {
  options: Scalars['String'];
  mid: Scalars['String'];
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


export type MutationUpdateMovieArgs = {
  options: UpdateMovieInput;
};


export type MutationCreateMovieArgs = {
  options: CreateMovieInput;
};


export type MutationRatingMovieArgs = {
  option: RatingInput;
};


export type MutationCreateCharacterArgs = {
  photo: Scalars['Upload'];
  username: Scalars['String'];
};


export type MutationUpdateMovieInfoArgs = {
  options: UpdateMovieInformationInput;
};


export type MutationCreateMovieInformationArgs = {
  options: CreateMovieInformationInput;
};


export type MutationUpdateCommentArgs = {
  text: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationCommentMoviesArgs = {
  options: CommentMovieInput;
};

export type NumberUserType = {
  __typename?: 'NumberUserType';
  total: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCurrentMovieState: UserMovieStateResponse;
  getMovieState: UserMovieStateResponse;
  getGenres: GenresResponse;
  me?: Maybe<User>;
  getTotalUsers: NumberUserType;
  getMovie: MovieResponse;
  getMovies: MoviesResponse;
  getMoviesByYear: MoviesResponse;
  getRankingMovies: MovieRankingResponse;
  getMoviesByUser: MoviesResponse;
  getAllCharacter: CharactersResponse;
  getComments: CommentsResponse;
  getComment: CommentResponse;
};


export type QueryGetCurrentMovieStateArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieArgs = {
  id: Scalars['String'];
};


export type QueryGetMoviesByYearArgs = {
  year: Scalars['Float'];
};


export type QueryGetCommentsArgs = {
  movieId: Scalars['String'];
};


export type QueryGetCommentArgs = {
  id: Scalars['String'];
};

export type RankingType = {
  __typename?: 'RankingType';
  rankingMovie: Movie;
  rank: Scalars['Float'];
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
  accessToken?: Maybe<Scalars['String']>;
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
  synopsis?: Maybe<Scalars['String']>;
  backgroundInfo?: Maybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']>;
  characters?: Maybe<Array<CharacterInput>>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  role: Scalars['String'];
  movies: Array<Movie>;
  photo?: Maybe<Scalars['String']>;
  ratingMovies?: Maybe<Array<RatingMovies>>;
  comment?: Maybe<Array<Comment>>;
  movieState?: Maybe<Array<MovieState>>;
};

export type UserLoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserMovieStateResponse = {
  __typename?: 'UserMovieStateResponse';
  watching: Scalars['Int'];
  completed: Scalars['Int'];
  planToWatch: Scalars['Int'];
  drop: Scalars['Int'];
  errors?: Maybe<Array<ErrorResponse>>;
};

export type UserRegisterInput = {
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  role?: Maybe<UserRoles>;
  password: Scalars['String'];
};

export enum UserRoles {
  Admin = 'Admin',
  Member = 'Member'
}

export type ErrorFragmentFragment = (
  { __typename?: 'ErrorResponse' }
  & Pick<ErrorResponse, 'message' | 'field'>
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'role'>
);

export type CreateCharacterMutationVariables = Exact<{
  photo: Scalars['Upload'];
  username: Scalars['String'];
}>;


export type CreateCharacterMutation = (
  { __typename?: 'Mutation' }
  & { createCharacter: (
    { __typename?: 'CharacterResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, character?: Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'photo' | 'username'>
    )> }
  ) }
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

export type CommentMovieMutationVariables = Exact<{
  id: Scalars['String'];
  comments: Scalars['String'];
}>;


export type CommentMovieMutation = (
  { __typename?: 'Mutation' }
  & { commentMovies: (
    { __typename?: 'MovieResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'title' | 'photo'>
    )> }
  ) }
);

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']> | Scalars['String'];
  characters: Array<CharacterInput> | CharacterInput;
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

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment: (
    { __typename?: 'CommentResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'text'>
    )> }
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

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment: (
    { __typename?: 'CommentResponse' }
    & { comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'text'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>> }
  ) }
);

export type UpdateMovieMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  genres: Array<Scalars['String']> | Scalars['String'];
  description?: Maybe<Scalars['String']>;
  characters: Array<CharacterInput> | CharacterInput;
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

export type UpdateMovieStateMutationVariables = Exact<{
  mid: Scalars['String'];
  state: Scalars['String'];
}>;


export type UpdateMovieStateMutation = (
  { __typename?: 'Mutation' }
  & { updateMovieState: (
    { __typename?: 'MovieStateResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'title'>
    )> }
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
    & Pick<RegisterResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFragmentFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ErrorFragmentFragment
    )>> }
  ) }
);

export type GetCommentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { getComment: (
    { __typename?: 'CommentResponse' }
    & { comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'text' | 'createdAt'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'photo'>
      ) }
    )>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>> }
  ) }
);

export type GetCommentsQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { getComments: (
    { __typename?: 'CommentsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, comments?: Maybe<Array<(
      { __typename?: 'CommentWithPermission' }
      & Pick<CommentWithPermission, 'isDelete' | 'isEdit'>
      & { comment?: Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'text' | 'createdAt'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'photo' | 'username'>
        ) }
      )> }
    )>> }
  ) }
);

export type GetCurrentMovieStateQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetCurrentMovieStateQuery = (
  { __typename: 'Query' }
  & { getCurrentMovieState: (
    { __typename?: 'UserMovieStateResponse' }
    & Pick<UserMovieStateResponse, 'completed' | 'drop' | 'planToWatch' | 'watching'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
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
      & Pick<Movie, 'id' | 'description' | 'title' | 'photo' | 'point' | 'rank'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'email' | 'role'>
      ), genres: Array<(
        { __typename?: 'Genre' }
        & Pick<Genre, 'id' | 'name'>
      )>, info?: Maybe<(
        { __typename?: 'MovieInfo' }
        & Pick<MovieInfo, 'id' | 'producer' | 'released_date' | 'status' | 'type' | 'episode' | 'duration' | 'synopsis' | 'backgroundInfo'>
      )>, ratingMovies?: Maybe<Array<(
        { __typename?: 'RatingMovies' }
        & Pick<RatingMovies, 'ratedPoint'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'photo' | 'email'>
        ) }
      )>>, movieCharacters?: Maybe<Array<(
        { __typename?: 'MovieCharacters' }
        & Pick<MovieCharacters, 'role'>
        & { character: (
          { __typename?: 'Character' }
          & Pick<Character, 'id' | 'photo' | 'username'>
        ) }
      )>>, movieState?: Maybe<Array<(
        { __typename?: 'MovieState' }
        & Pick<MovieState, 'watching' | 'completed' | 'planToWatch' | 'drop'>
      )>> }
    )> }
  ) }
);

export type GetMovieStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieStateQuery = (
  { __typename: 'Query' }
  & { getMovieState: (
    { __typename?: 'UserMovieStateResponse' }
    & Pick<UserMovieStateResponse, 'completed' | 'drop' | 'planToWatch' | 'watching'>
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
      & Pick<Movie, 'id' | 'description' | 'title' | 'photo' | 'rank'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'email' | 'role'>
      ), genres: Array<(
        { __typename?: 'Genre' }
        & Pick<Genre, 'id' | 'name'>
      )>, info?: Maybe<(
        { __typename?: 'MovieInfo' }
        & Pick<MovieInfo, 'id' | 'producer' | 'released_date' | 'status' | 'type' | 'episode' | 'duration' | 'synopsis' | 'backgroundInfo'>
      )> }
    )>> }
  ) }
);

export type GetMoviesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesByUserQuery = (
  { __typename: 'Query' }
  & { getMoviesByUser: (
    { __typename?: 'MoviesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movies?: Maybe<Array<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'title' | 'photo' | 'description'>
    )>> }
  ) }
);

export type GetRankingMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRankingMoviesQuery = (
  { __typename: 'Query' }
  & { getRankingMovies: (
    { __typename?: 'MovieRankingResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, movies?: Maybe<Array<(
      { __typename?: 'RankingType' }
      & Pick<RankingType, 'rank'>
      & { rankingMovie: (
        { __typename?: 'Movie' }
        & Pick<Movie, 'id' | 'title' | 'description' | 'photo' | 'point'>
        & { creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'email' | 'role'>
        ), genres: Array<(
          { __typename?: 'Genre' }
          & Pick<Genre, 'id' | 'name'>
        )>, info?: Maybe<(
          { __typename?: 'MovieInfo' }
          & Pick<MovieInfo, 'id' | 'producer' | 'released_date' | 'status' | 'type' | 'episode' | 'duration' | 'synopsis' | 'backgroundInfo'>
        )> }
      ) }
    )>> }
  ) }
);

export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & { getAllCharacter: (
    { __typename?: 'CharactersResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'field' | 'message'>
    )>>, characters?: Maybe<Array<(
      { __typename?: 'Character' }
      & Pick<Character, 'id' | 'photo' | 'username'>
      & { movieCharacters?: Maybe<Array<(
        { __typename?: 'MovieCharacters' }
        & { movie: (
          { __typename?: 'Movie' }
          & Pick<Movie, 'id' | 'title' | 'description'>
        ) }
      )>> }
    )>> }
  ) }
);

export type GetTotalUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalUsersQuery = (
  { __typename: 'Query' }
  & { getTotalUsers: (
    { __typename?: 'NumberUserType' }
    & Pick<NumberUserType, 'total'>
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
export const CreateCharacterDocument = gql`
    mutation CreateCharacter($photo: Upload!, $username: String!) {
  createCharacter(username: $username, photo: $photo) {
    errors {
      field
      message
    }
    character {
      photo
      username
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
 *      username: // value for 'username'
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
export const CommentMovieDocument = gql`
    mutation CommentMovie($id: String!, $comments: String!) {
  commentMovies(options: {id: $id, comments: $comments}) {
    errors {
      field
      message
    }
    movie {
      id
      title
      photo
    }
  }
}
    `;
export type CommentMovieMutationFn = Apollo.MutationFunction<CommentMovieMutation, CommentMovieMutationVariables>;

/**
 * __useCommentMovieMutation__
 *
 * To run a mutation, you first call `useCommentMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentMovieMutation, { data, loading, error }] = useCommentMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comments: // value for 'comments'
 *   },
 * });
 */
export function useCommentMovieMutation(baseOptions?: Apollo.MutationHookOptions<CommentMovieMutation, CommentMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentMovieMutation, CommentMovieMutationVariables>(CommentMovieDocument, options);
      }
export type CommentMovieMutationHookResult = ReturnType<typeof useCommentMovieMutation>;
export type CommentMovieMutationResult = Apollo.MutationResult<CommentMovieMutation>;
export type CommentMovieMutationOptions = Apollo.BaseMutationOptions<CommentMovieMutation, CommentMovieMutationVariables>;
export const CreateMovieDocument = gql`
    mutation CreateMovie($title: String!, $description: String, $genres: [String!]!, $characters: [CharacterInput!]!) {
  createMovie(
    options: {title: $title, genres: $genres, description: $description, characters: $characters}
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
 *      characters: // value for 'characters'
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
    mutation CreateMovieInformation($type: MovieType!, $producer: String, $episode: Int, $status: StatusType!, $durations: Int, $releasedDate: String, $movie: String!) {
  createMovieInformation(
    options: {type: $type, producer: $producer, episode: $episode, status: $status, durations: $durations, released_date: $releasedDate, movie: $movie}
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
export const DeleteCommentDocument = gql`
    mutation DeleteComment($id: String!) {
  deleteComment(id: $id) {
    errors {
      field
      message
    }
    comment {
      id
      text
    }
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
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
export const UpdateCommentDocument = gql`
    mutation UpdateComment($id: String!, $text: String!) {
  updateComment(text: $text, id: $id) {
    comment {
      id
      text
    }
    errors {
      field
      message
    }
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const UpdateMovieDocument = gql`
    mutation UpdateMovie($id: String!, $title: String!, $genres: [String!]!, $description: String, $characters: [CharacterInput!]!) {
  updateMovie(
    options: {id: $id, title: $title, description: $description, characters: $characters, genres: $genres}
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
 *      characters: // value for 'characters'
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
    mutation UpdateMovieInformation($type: MovieType!, $producer: String, $episode: Int, $status: StatusType!, $durations: Int, $releasedDate: String, $movie: String!, $synopsis: String, $backgroundInfo: String) {
  updateMovieInfo(
    options: {type: $type, producer: $producer, episode: $episode, status: $status, durations: $durations, released_date: $releasedDate, movie: $movie, synopsis: $synopsis, backgroundInfo: $backgroundInfo}
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
export const UpdateMovieStateDocument = gql`
    mutation updateMovieState($mid: String!, $state: String!) {
  updateMovieState(mid: $mid, options: $state) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
    movie {
      id
      title
    }
  }
}
    `;
export type UpdateMovieStateMutationFn = Apollo.MutationFunction<UpdateMovieStateMutation, UpdateMovieStateMutationVariables>;

/**
 * __useUpdateMovieStateMutation__
 *
 * To run a mutation, you first call `useUpdateMovieStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieStateMutation, { data, loading, error }] = useUpdateMovieStateMutation({
 *   variables: {
 *      mid: // value for 'mid'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateMovieStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieStateMutation, UpdateMovieStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieStateMutation, UpdateMovieStateMutationVariables>(UpdateMovieStateDocument, options);
      }
export type UpdateMovieStateMutationHookResult = ReturnType<typeof useUpdateMovieStateMutation>;
export type UpdateMovieStateMutationResult = Apollo.MutationResult<UpdateMovieStateMutation>;
export type UpdateMovieStateMutationOptions = Apollo.BaseMutationOptions<UpdateMovieStateMutation, UpdateMovieStateMutationVariables>;
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
    accessToken
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
export const GetCommentDocument = gql`
    query GetComment($id: String!) {
  getComment(id: $id) {
    comment {
      id
      text
      user {
        id
        username
        photo
      }
      createdAt
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const GetCommentsDocument = gql`
    query GetComments($mid: String!) {
  getComments(movieId: $mid) {
    errors {
      field
      message
    }
    comments {
      comment {
        id
        text
        createdAt
        user {
          id
          photo
          username
        }
      }
      isDelete
      isEdit
    }
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      mid: // value for 'mid'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetCurrentMovieStateDocument = gql`
    query getCurrentMovieState($mid: String!) {
  __typename
  getCurrentMovieState(mid: $mid) {
    completed
    drop
    planToWatch
    watching
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useGetCurrentMovieStateQuery__
 *
 * To run a query within a React component, call `useGetCurrentMovieStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentMovieStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentMovieStateQuery({
 *   variables: {
 *      mid: // value for 'mid'
 *   },
 * });
 */
export function useGetCurrentMovieStateQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentMovieStateQuery, GetCurrentMovieStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentMovieStateQuery, GetCurrentMovieStateQueryVariables>(GetCurrentMovieStateDocument, options);
      }
export function useGetCurrentMovieStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentMovieStateQuery, GetCurrentMovieStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentMovieStateQuery, GetCurrentMovieStateQueryVariables>(GetCurrentMovieStateDocument, options);
        }
export type GetCurrentMovieStateQueryHookResult = ReturnType<typeof useGetCurrentMovieStateQuery>;
export type GetCurrentMovieStateLazyQueryHookResult = ReturnType<typeof useGetCurrentMovieStateLazyQuery>;
export type GetCurrentMovieStateQueryResult = Apollo.QueryResult<GetCurrentMovieStateQuery, GetCurrentMovieStateQueryVariables>;
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
      movieCharacters {
        character {
          id
          photo
          username
        }
        role
      }
      movieState {
        watching
        completed
        planToWatch
        drop
      }
      point
      rank
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
export const GetMovieStateDocument = gql`
    query getMovieState {
  __typename
  getMovieState {
    completed
    drop
    planToWatch
    watching
  }
}
    `;

/**
 * __useGetMovieStateQuery__
 *
 * To run a query within a React component, call `useGetMovieStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieStateQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieStateQuery, GetMovieStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieStateQuery, GetMovieStateQueryVariables>(GetMovieStateDocument, options);
      }
export function useGetMovieStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieStateQuery, GetMovieStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieStateQuery, GetMovieStateQueryVariables>(GetMovieStateDocument, options);
        }
export type GetMovieStateQueryHookResult = ReturnType<typeof useGetMovieStateQuery>;
export type GetMovieStateLazyQueryHookResult = ReturnType<typeof useGetMovieStateLazyQuery>;
export type GetMovieStateQueryResult = Apollo.QueryResult<GetMovieStateQuery, GetMovieStateQueryVariables>;
export const GetMoviesDocument = gql`
    query GetMovies {
  getMovies {
    errors {
      field
      message
    }
    movies {
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
      }
      rank
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
export const GetMoviesByUserDocument = gql`
    query getMoviesByUser {
  __typename
  getMoviesByUser {
    errors {
      field
      message
    }
    movies {
      id
      title
      photo
      description
    }
  }
}
    `;

/**
 * __useGetMoviesByUserQuery__
 *
 * To run a query within a React component, call `useGetMoviesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesByUserQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesByUserQuery, GetMoviesByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesByUserQuery, GetMoviesByUserQueryVariables>(GetMoviesByUserDocument, options);
      }
export function useGetMoviesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesByUserQuery, GetMoviesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesByUserQuery, GetMoviesByUserQueryVariables>(GetMoviesByUserDocument, options);
        }
export type GetMoviesByUserQueryHookResult = ReturnType<typeof useGetMoviesByUserQuery>;
export type GetMoviesByUserLazyQueryHookResult = ReturnType<typeof useGetMoviesByUserLazyQuery>;
export type GetMoviesByUserQueryResult = Apollo.QueryResult<GetMoviesByUserQuery, GetMoviesByUserQueryVariables>;
export const GetRankingMoviesDocument = gql`
    query getRankingMovies {
  __typename
  getRankingMovies {
    errors {
      field
      message
    }
    movies {
      rank
      rankingMovie {
        id
        title
        description
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
        }
        point
      }
    }
  }
}
    `;

/**
 * __useGetRankingMoviesQuery__
 *
 * To run a query within a React component, call `useGetRankingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRankingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRankingMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRankingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetRankingMoviesQuery, GetRankingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRankingMoviesQuery, GetRankingMoviesQueryVariables>(GetRankingMoviesDocument, options);
      }
export function useGetRankingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRankingMoviesQuery, GetRankingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRankingMoviesQuery, GetRankingMoviesQueryVariables>(GetRankingMoviesDocument, options);
        }
export type GetRankingMoviesQueryHookResult = ReturnType<typeof useGetRankingMoviesQuery>;
export type GetRankingMoviesLazyQueryHookResult = ReturnType<typeof useGetRankingMoviesLazyQuery>;
export type GetRankingMoviesQueryResult = Apollo.QueryResult<GetRankingMoviesQuery, GetRankingMoviesQueryVariables>;
export const GetCharactersDocument = gql`
    query GetCharacters {
  getAllCharacter {
    errors {
      field
      message
    }
    characters {
      id
      photo
      username
      movieCharacters {
        movie {
          id
          title
          description
        }
      }
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
export const GetTotalUsersDocument = gql`
    query getTotalUsers {
  __typename
  getTotalUsers {
    total
  }
}
    `;

/**
 * __useGetTotalUsersQuery__
 *
 * To run a query within a React component, call `useGetTotalUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTotalUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalUsersQuery, GetTotalUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalUsersQuery, GetTotalUsersQueryVariables>(GetTotalUsersDocument, options);
      }
export function useGetTotalUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalUsersQuery, GetTotalUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalUsersQuery, GetTotalUsersQueryVariables>(GetTotalUsersDocument, options);
        }
export type GetTotalUsersQueryHookResult = ReturnType<typeof useGetTotalUsersQuery>;
export type GetTotalUsersLazyQueryHookResult = ReturnType<typeof useGetTotalUsersLazyQuery>;
export type GetTotalUsersQueryResult = Apollo.QueryResult<GetTotalUsersQuery, GetTotalUsersQueryVariables>;
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