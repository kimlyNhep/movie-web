import { ScrollCard } from '../components/ScrollCard';
import { LeftSide } from '../components/LeftSide';
import { Layout } from 'antd';
import MainLayout from '../layout';
import { RankingType, useGetRankingMoviesQuery } from '../generated/graphql';

const { Content } = Layout;

const Home = () => {
  const { data } = useGetRankingMoviesQuery();
  const movies = data?.getRankingMovies.movies as RankingType[];

  return (
    <MainLayout>
      <Content className='overflow-hidden border-r pr-1'>
        <div>
          <ScrollCard title='Movies 2021' movies={movies} />
        </div>
      </Content>
      <LeftSide />
    </MainLayout>
  );
};

export default Home;
