import { Divider, Tooltip } from 'antd';
import { useEffect } from 'react';
import { RankingType } from '../../generated/graphql';
import styles from './styles.module.css';

export const ScrollCard: React.FC<{
  movies?: RankingType[];
  title: string;
}> = ({ movies, title }) => {
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className={styles.cards}>
      <span className='font-bold'>{title}</span>
      <Divider />
      <div className={styles.wrapper}>
        {movies?.map((movie) => (
          <Tooltip
            placement='bottom'
            title={movie.rankingMovie.title}
            key={movie.rankingMovie.id}
          >
            <a
              className={styles.item}
              href={`/movie/detail/${movie.rankingMovie.id}?rank=${movie.rank}`}
            >
              <img src={movie.rankingMovie.photo!} alt='listing' />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
