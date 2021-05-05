import { Divider } from 'antd';
import { useRouter } from 'next/router';
import { MovieSide } from '../../../components/MovieSide';
import { useGetMovieQuery } from '../../../generated/graphql';
import Layout from '../../../layout';
import { IMovieType } from '../../../types/movie';
import { ScoreBoard } from '../../../components/ScoreBoard';

const MovieDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });

  return (
    <Layout>
      <div className='w-full mb-5'>
        <div className='flex flex-col w-full'>
          <strong>{data?.getMovie.movie?.title}</strong>
          <Divider className='bg-gray-500' />
        </div>
        <div className='flex' style={{ height: '90%' }}>
          <MovieSide movie={data?.getMovie.movie as IMovieType} />
          <Divider type='vertical' className='h-full bg-gray-400'></Divider>
          <ScoreBoard />
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
