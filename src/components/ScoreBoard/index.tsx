import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';
import { RatingMovies } from '../../generated/graphql';

interface IScoreBoardProp {
  ratedPoint?: RatingMovies[];
}

export const ScoreBoard: React.FC<IScoreBoardProp> = ({ ratedPoint }) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [totalRatedUsers, setTotalRatedUsers] = useState(0);

  useEffect(() => {
    if (ratedPoint) {
      const ratedValue = ratedPoint?.reduce((totalPoint, point) => {
        return (totalPoint + point.ratedPoint) / ratedPoint.length;
      }, 0);
      setRatingValue(ratedValue || 0);
      setTotalRatedUsers(ratedPoint.length);
    }
  }, [ratedPoint]);

  return (
    <div className='w-full'>
      <Card
        className={cls(
          styles.card,
          'bg-gray-200 w-full border border-gray-500'
        )}
      >
        <div className='flex h-20'>
          <div className='flex flex-col'>
            <div className='bg-blue-800 w-16 h-5 rounded-sm text-white flex justify-center items-center'>
              score
            </div>
            <div className='text-2xl text-center'>{ratingValue}</div>
            <div className='text-xs text-center'>{totalRatedUsers} users</div>
          </div>
          <Divider className='bg-gray-300 h-full' type='vertical' />
          <div className='flex items-center ml-3'>
            <div className='text-xl'>Ranked</div>
            <div className='ml-1 text-2xl'># 23</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
