import { ScrollCard } from '../components/ScrollCard';
import { LeftSide } from '../components/LeftSide';
import { Layout } from 'antd';
import MainLayout from '../layout';
import { Movie, useGetMoviesQuery } from '../generated/graphql';

const { Content } = Layout;

const Home = () => {
  const { data } = useGetMoviesQuery();
  const movies = data?.getMovies.movies as Movie[];

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
