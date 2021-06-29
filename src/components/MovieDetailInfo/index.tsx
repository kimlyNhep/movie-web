import { Divider, Tag } from 'antd';
import { IMovieInfoType } from '../../types/movie';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { Genre } from '../../generated/graphql';
import { useEffect } from 'react';

momentDurationFormatSetup(moment as any);

interface IMovieInfoProps {
  info?: IMovieInfoType;
  genres?: Genre[];
}

export const MovieDetailInfo: React.FC<IMovieInfoProps> = ({
  info,
  genres,
}) => {
  let second = info?.duration;

  const time = Math.floor(second! / 3600);
  const min = Math.floor((second! % 3600) / 60);

  return (
    <div>
      <strong>Information</strong>
      <Divider
        className='mt-2 bg-gray-600'
        style={{ margin: 0, marginBottom: '0.5rem' }}
      />
      <div className='flex flex-col'>
        <span className='flex justify-between'>
          Type : <span>{info?.type}</span>
        </span>
        <span className='flex justify-between'>
          Espisodes : <span>{info?.episode}</span>
        </span>
        <span className='flex justify-between'>
          Durations :
          <span>
            <span>{time}</span> h <span>{min}</span> mins
          </span>
        </span>
        <span className='flex justify-between'>
          Status : <Tag color='#87d068'>{info?.status}</Tag>
        </span>
        <span className='flex justify-between'>
          Producers : <span>{info?.producer}</span>
        </span>
        <span className='flex justify-between items-center'>
          Released Date :{' '}
          <span className='text-xs'>
            {info?.released_date
              ? new Date(info?.released_date).toDateString()
              : null}
          </span>
        </span>
        <span>
          Genres :{' '}
          {genres?.map((genre) => (
            <Tag>{genre.name}</Tag>
          ))}
        </span>
      </div>
    </div>
  );
};
