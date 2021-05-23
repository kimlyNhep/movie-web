import React, { useEffect, useState } from 'react';
import { Button, Card, Rate } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';
import { RatingMovies, useRatingMovieMutation } from '../../generated/graphql';

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

  const handleSubmitRating = async () => {
    await ratingMovieRequest({
      variables: {
        ratedPoint: ratingValue * 2,
        movieId,
      },
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
            <Button
              size='small'
              type='primary'
              className='ml-5'
              onClick={handleSubmitRating}
            >
              Apply
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
