import { Row, Statistic, Card, Divider, List, Col } from 'antd';
import cls from 'classnames';
import styles from './styles.module.css';
import { CardRanking } from '../CardRanking';
import { FC } from 'react';
import { Movie, useGetTopMoviesQuery } from '../../generated/graphql';

export const LeftSide: FC = () => {
  const { data } = useGetTopMoviesQuery();

  return (
    <div className={cls(styles.leftSide, 'mt-1')}>
      <Card className={styles.topMovies} title='Top Movies'>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={data?.getTopMovies.movies as Movie[]}
          renderItem={(item) => (
            <CardRanking
              title={item.title}
              description={item.description!}
              href={`movie/detail/${item.id}`}
              rank={item.rank!}
              photo={item.photo!}
            />
          )}
        />
      </Card>
    </div>
  );
};
