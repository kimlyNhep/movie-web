import { Divider, Tooltip } from 'antd';
import { useGetMoviesByYearQuery } from '../../generated/graphql';
import styles from './styles.module.css';
import cx from 'classnames';

export const ScrollCard: React.FC<{
  year: number;
  title: string;
  searchText?: string;
}> = ({ year, title, searchText }) => {
  const { data } = useGetMoviesByYearQuery({
    variables: {
      year,
      search: searchText,
    },
  });

  return (
    <div className={styles.cards}>
      {!!data?.getMoviesByYear.movies?.length && (
        <span>
          <span className='font-bold'>{title}</span>
          <Divider />
        </span>
      )}
      <div className={styles.wrapper}>
        {data?.getMoviesByYear.movies?.map((movie) => (
          <Tooltip placement='bottom' title={movie.title} key={movie.id}>
            <a
              className={cx(styles.item, 'flex flex-col justify-center')}
              href={`/movie/detail/${movie.id}`}
            >
              <img src={movie.photo!} alt='listing' />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
