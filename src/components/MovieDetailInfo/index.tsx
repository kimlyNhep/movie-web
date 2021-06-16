import { useRouter } from 'next/router';

import { Button, Divider } from 'antd';
import { IMovieInfoType } from '../../types/movie';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useEffect, useState } from 'react';
import {
  useGetMovieQuery,
  useGetTotalUsersQuery,
} from '../../generated/graphql';

momentDurationFormatSetup(moment as any);

interface IMovieInfoProps {
  info?: IMovieInfoType;
}

export const MovieDetailInfo: React.FC<IMovieInfoProps> = ({ info }) => {
  const router = useRouter();
  const rank = router.query.rank as string;
  const id = router.query.id as string;
  const [score, setScore] = useState<number>(0);
  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });
  const { data: totalUser } = useGetTotalUsersQuery();

  let time = 0;
  let min = info?.duration! / 60;
  if (min > 60) {
    min = min - 60;
    time++;
  }

  const fetchCurrentMovie = async () => {
    const point =
      (data?.getMovie.movie?.point || 0) / totalUser?.getTotalUsers.total!;

    console.log(data?.getMovie.movie?.point);
    setScore(Number(point.toFixed(1)));
  };

  useEffect(() => {
    fetchCurrentMovie();
  }, [id, totalUser]);

  return (
    <div>
      <strong>Information</strong>
      <Divider
        className='mt-2 bg-gray-600'
        style={{ margin: 0, marginBottom: '0.5rem' }}
      />
      <Button className='mb-2 w-full' type='primary'>
        Add Favorite
      </Button>
      <Divider
        className='mt-2 bg-gray-600'
        style={{ margin: 0, marginBottom: '1rem' }}
      />
      <div className='flex flex-col'>
        <span>Type : {info?.type}</span>
        <span>Espisodes : {info?.episode}</span>
        <span>
          Durations : <span>{time}</span> h <span>{min}</span> min
        </span>
        <span>Status : {info?.status}</span>
        <span>Producers : {info?.producer}</span>
        <span>Released Date : {info?.released_date}</span>
      </div>
      <strong className='pt-5'>Statistic</strong>
      <Divider
        className='mt-2 bg-gray-600'
        style={{ margin: 0, marginBottom: '0.5rem' }}
      />
      <div className='flex flex-col'>
        <span>
          Score :<span> {score}</span>
        </span>
        <span>
          Ranked : <span># {rank}</span>
        </span>
      </div>
    </div>
  );
};
