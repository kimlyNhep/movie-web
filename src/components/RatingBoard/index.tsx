import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, Rate } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';
import {
  GetMovieDocument,
  MeDocument,
  MeQuery,
  RatingMovies,
  useRatingMovieMutation,
} from '../../generated/graphql';
import { useApolloClient } from '@apollo/client';

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
  const client = useApolloClient();

  const router = useRouter();
  const id = router.query.id as string;

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

  useEffect(() => {
    if (ratedPoint) {
      const ratedValue = ratedPoint?.reduce((totalPoint, point) => {
        return (totalPoint + point.ratedPoint) / ratedPoint.length;
      }, 0);
      setRatingValue(ratedValue! / 2 || 0);
    }
  }, [ratedPoint]);

  const fetchUser = async () => {
    try {
      const currentUser = await client.query<MeQuery>({ query: MeDocument });
      if (currentUser) setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='w-full'>
      <Card
        className={cls(
          styles.card,
          'bg-gray-200 w-full border border-gray-300 mt-5'
        )}
      >
        <div className='flex h-10'>
          <div className='flex items-center ml-3'>
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
          </div>
        </div>
      </Card>
    </div>
  );
};
