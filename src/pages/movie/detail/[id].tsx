import Layout from '../../../layout';
import { Divider, List, Button } from 'antd';
import { useRouter } from 'next/router';
import { MovieSide } from '../../../components/MovieSide';
import { RatingMovies, useGetMovieQuery } from '../../../generated/graphql';
import { IMovieType } from '../../../types/movie';
import { ScoreBoard } from '../../../components/ScoreBoard';
import { RatingBoard } from '../../../components/RatingBoard';
import { ListCharacters } from '../../../components/ListCharacters';
import { ICharacterType } from '../../../types/user';
import Reviews from '../../../components/Reviews';
import cx from 'classnames';
import styles from './styles.module.css';

const MovieDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });

  let characters: ICharacterType[] = [];

  if (data?.getMovie.movie) {
    characters = data?.getMovie.movie.movieCharacters?.map((character) => ({
      id: character.character.id,
      username: character.character.username,
      photo: character.character.photo,
      role: character.role,
    })) as ICharacterType[];
  }

  const handleUpdateMovie = () => {
    router.push(`/movie/update/${id}`);
  };

  return (
    <Layout>
      <div className='w-full mb-10'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <strong className='text-lg'>{data?.getMovie.movie?.title}</strong>
              <span>{data?.getMovie.movie?.description}</span>
            </div>
            {data?.getMovie.isOwner && (
              <Button
                size='small'
                className='self-center px-5'
                type='primary'
                onClick={handleUpdateMovie}
              >
                Edit
              </Button>
            )}
          </div>
          <Divider className='bg-gray-500 mt-2' />
        </div>
        <div className='flex' style={{ height: '90%' }}>
          <MovieSide movie={data?.getMovie.movie as IMovieType} />
          <Divider
            type='vertical'
            className='bg-gray-400'
            style={{ height: '100%' }}
          ></Divider>
          <div className='w-full'>
            <ScoreBoard
              ratedPoint={data?.getMovie.movie?.point!}
              ratedUser={data?.getMovie.movie?.ratingMovies?.length!}
              rank={data?.getMovie.movie?.rank!}
            />
            <RatingBoard
              movieId={id}
              ratedPoint={data?.getMovie.movie?.ratingMovies as RatingMovies[]}
            />
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
            <div className={cx(styles.divider, 'mt-4')}>
              <strong>Characters</strong>
              <Divider className='mt-0 bg-gray-300' />
              {!!characters?.length && (
                <List
                  size='large'
                  itemLayout='horizontal'
                  dataSource={characters}
                  renderItem={(item) => <ListCharacters character={item} />}
                />
              )}
            </div>
            <div className={styles.divider}>
              <strong>Reviews</strong>
              <Divider className='mt-0 bg-gray-400' />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
