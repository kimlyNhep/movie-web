import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { MovieSide } from '../../../components/MovieSide';
import { useGetMovieQuery } from '../../../generated/graphql';
import Layout from '../../../layout';
import { IMovieType } from '../../../types/movie';

const MovieDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });

  const handleAddMovie = () => {
    router.push('/movie/create');
  };

  const handleNewGenre = () => {
    router.push('/genre/create');
  };

  return (
    <Layout>
      <MovieSide movie={data?.getMovie.movie as IMovieType} />
      <Divider type='vertical' style={{ height: '300px' }}></Divider>
      <Button size='small' onClick={handleAddMovie}>
        Add Movie
      </Button>
      <Button size='small' onClick={handleNewGenre}>
        New Genre
      </Button>
    </Layout>
  );
};

export default MovieDetail;
