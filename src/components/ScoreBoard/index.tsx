import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';
import { useGetTotalUsersQuery } from '../../generated/graphql';

interface IScoreBoardProp {
  ratedPoint?: number;
  ratedUser: number;
  rank: number;
}

export const ScoreBoard: React.FC<IScoreBoardProp> = ({
  ratedPoint,
  ratedUser,
  rank,
}) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [totalRatedUsers, setTotalRatedUsers] = useState(0);
  const { data } = useGetTotalUsersQuery();

  useEffect(() => {
    if (ratedPoint) {
      const ratedValue = Number(ratedPoint / data?.getTotalUsers.total!);

      setRatingValue(Number(ratedValue.toFixed(1)));
      setTotalRatedUsers(ratedUser);
    }
  }, [ratedPoint, data]);

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
          <Divider
            className='bg-gray-300'
            type='vertical'
            style={{ height: '100%' }}
          />
          <div className='flex items-center ml-3'>
            <div className='text-xl'>Ranked</div>
            <div className='ml-1 text-2xl'># {rank}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
