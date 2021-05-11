import { Divider, Tooltip } from 'antd';
import { IMovieType } from '../../types/movie';
import styles from './styles.module.css';

export const ScrollCard: React.FC<{
  movies?: IMovieType[];
  title: string;
}> = ({ movies, title }) => {
  return (
    <div className={styles.cards}>
      <span className='font-bold'>{title}</span>
      <Divider />
      <div className={styles.wrapper}>
        {movies?.map((movie) => (
          <Tooltip placement='bottom' title={movie.title} key={movie.id}>
            <a className={styles.item} href={`/movie/detail/${movie.id}`}>
              <img src={movie.photo} alt='listing' />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
