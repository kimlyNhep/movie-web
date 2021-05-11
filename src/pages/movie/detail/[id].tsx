import Layout from '../../../layout';
import { Divider, List, Button } from 'antd';
import { useRouter } from 'next/router';
import { MovieSide } from '../../../components/MovieSide';
import { useGetMovieQuery } from '../../../generated/graphql';
import { IMovieType } from '../../../types/movie';
import { ScoreBoard } from '../../../components/ScoreBoard';
import { ListCharacters } from '../../../components/ListCharacters';
import { ICharacterType } from '../../../types/user';

const MovieDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });

  let characters;

  if (data?.getMovie.movie) {
    characters = data?.getMovie.movie?.info?.characters;
  }

  const handleUpdateMovie = () => {
    router.push(`/movie/update/${id}`);
  };

  return (
    <Layout>
      <div className='w-full mb-5'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-between'>
            <strong>{data?.getMovie.movie?.title}</strong>
            <Button size='small' type='primary' onClick={handleUpdateMovie}>
              Edit
            </Button>
          </div>
          <Divider className='bg-gray-500 mt-2' />
        </div>
        <div className='flex' style={{ height: '90%' }}>
          <MovieSide movie={data?.getMovie.movie as IMovieType} />
          <Divider type='vertical' className='h-full bg-gray-400'></Divider>
          <div className='w-full'>
            <ScoreBoard />
            <div className='mt-4'>
              <strong>Synopsis</strong>
              <Divider className='my-1 bg-gray-300' />
              <div>{data?.getMovie.movie?.info?.synopsis}</div>
            </div>
            <div className='mt-4'>
              <strong>Background</strong>
              <Divider className='my-1 bg-gray-300' />
              <div>{data?.getMovie.movie?.info?.backgroundInfo}</div>
            </div>
            <div className='mt-4'>
              <strong>Characters</strong>
              <Divider className='my-1 bg-gray-300' />
              <List
                size='large'
                itemLayout='horizontal'
                dataSource={characters as ICharacterType[]}
                renderItem={(item) => (
                  <ListCharacters
                    id={item.id}
                    username={item.username}
                    photo={item.photo as string | undefined}
                  />
                )}
              ></List>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
