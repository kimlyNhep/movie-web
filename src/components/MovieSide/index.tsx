import styles from './styles.module.css';
import { Image } from 'antd';
import { MovieDetailInfo } from '../MovieDetailInfo';
import { IMovieType } from '../../types/movie';

interface IMovieSideProps {
  movie?: IMovieType;
}

export const MovieSide: React.FC<IMovieSideProps> = ({ movie }) => {
  return (
    <div className={styles.profileSide}>
      <Image className={styles.photo} src={movie?.photo} preview={false} />
      <MovieDetailInfo info={movie?.info} />
    </div>
  );
};
