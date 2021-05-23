import { MovieType, StatusType } from '../generated/graphql';
import { IGenreType } from './genre';
import { IUserType } from './user';

export interface IMovieType {
  id: string;
  title: string;
  description?: string;
  photo?: string;
  creator: IUserType;
  genres: IGenreType[];
  info?: IMovieInfoType;
}

export interface IMovieInfoType {
  id: string;
  duration: number;
  episode: number;
  producer: string;
  released_date: number;
  status: StatusType;
  type: MovieType;
}
