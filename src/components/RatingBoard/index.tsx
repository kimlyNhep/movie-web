import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, Rate, Select } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';
import {
  GetMovieDocument,
  MeDocument,
  MeQuery,
  RatingMovies,
  useGetCurrentMovieStateQuery,
  useRatingMovieMutation,
  useUpdateMovieStateMutation,
} from '../../generated/graphql';
import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { MovieStateType } from '../../types/movie';

interface IRatingBoardProps {
  movieId: string;
  ratedPoint?: RatingMovies[];
}

export const RatingBoard: React.FC<IRatingBoardProps> = ({
  movieId,
  ratedPoint,
}) => {
  const [ratingMovieRequest] = useRatingMovieMutation();
  const [ratingValue, setRatingValue] = useState(0);
  const [isAuth, setIsAuth] = useState<boolean>();
  const [currentUser, setCurrentUser] = useState<ApolloQueryResult<MeQuery>>();
  const client = useApolloClient();
  const [selectedMovieState, setSelectedMovieState] = useState<string>();

  const { Option } = Select;

  const router = useRouter();
  const id = router.query.id as string;

  const [updateMovieStateRequest] = useUpdateMovieStateMutation();
  const { data } = useGetCurrentMovieStateQuery({
    variables: {
      mid: id,
    },
  });

  const handleSubmitRating = async () => {
    await ratingMovieRequest({
      variables: {
        ratedPoint: ratingValue * 2,
        movieId,
      },
      refetchQueries: [
        {
          query: GetMovieDocument,
          variables: { id },
        },
      ],
    });
  };

  const handleUpdateMovieState = async () => {
    await updateMovieStateRequest({
      variables: {
        mid: id,
        state: selectedMovieState!,
      },
    });
  };

  const handleSelectChange = (value: string) => {
    setSelectedMovieState(value);
  };

  useEffect(() => {
    if (ratedPoint) {
      ratedPoint?.forEach((point) => {
        if (currentUser?.data.me?.id === point.user.id) {
          setRatingValue(Number((point.ratedPoint / 2).toFixed(1)));
          return;
        }
      });
    }
  }, [ratedPoint]);

  const fetchUser = async () => {
    try {
      const currentUser = await client.query<MeQuery>({ query: MeDocument });
      if (currentUser) {
        setCurrentUser(currentUser);
        setIsAuth(true);
      }
    } catch (err) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    fetchUser();

    console.log(data);
  }, []);

  useEffect(() => {
    if (data?.getCurrentMovieState.watching === 1)
      setSelectedMovieState(MovieStateType.Watching);
    if (data?.getCurrentMovieState.completed === 1)
      setSelectedMovieState(MovieStateType.Completed);
    if (data?.getCurrentMovieState.planToWatch === 1)
      setSelectedMovieState(MovieStateType.Plantowatch);
    if (data?.getCurrentMovieState.drop === 1)
      setSelectedMovieState(MovieStateType.Drop);

    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(selectedMovieState);
  }, [selectedMovieState]);

  return (
    <div className='w-full mt-2'>
      <Card
        className={cls(
          styles.card,
          'bg-gray-200 w-full border border-gray-300 mt-5'
        )}
      >
        <div className='flex h-10 w-full'>
          <div className='flex items-center ml-3 w-full'>
            <Rate
              allowHalf
              value={ratingValue}
              className='mt-0'
              onChange={(value) => setRatingValue(value)}
            />
            {isAuth && (
              <Button
                size='small'
                type='primary'
                className='ml-5'
                onClick={handleSubmitRating}
              >
                Apply
              </Button>
            )}
            <Select
              size='small'
              placeholder='Select State'
              style={{ width: '150px', marginLeft: '1.5rem' }}
              allowClear
              onSelect={handleSelectChange}
              value={selectedMovieState}
            >
              <Option value={MovieStateType.Watching}>Watching</Option>
              <Option value={MovieStateType.Plantowatch}>Plan To Watch</Option>
              <Option value={MovieStateType.Completed}>Completed</Option>
              <Option value={MovieStateType.Drop}>Drop</Option>
            </Select>

            <Button
              size='small'
              type='primary'
              className='ml-5'
              onClick={handleUpdateMovieState}
            >
              Save
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
