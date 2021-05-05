import { Divider } from 'antd';
import { IMovieInfoType } from '../../types/movie';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment as any);

interface IMovieInfoProps {
  info?: IMovieInfoType;
}

export const MovieDetailInfo: React.FC<IMovieInfoProps> = ({ info }) => {
  console.log(info);

  const durations = moment.duration(info?.duration, 'seconds').format('hh:mm');

  return (
    <div>
      <strong>Information</strong>
      <Divider className='mt-2 bg-gray-600' />
      <span>Type : {info?.type}</span> <br />
      <span>Espisodes : {info?.episode}</span> <br />
      <span>Durations : {durations}</span> <br />
      <span>Status : {info?.status}</span> <br />
      <span>Producers : {info?.producer}</span> <br />
      <span>Released Date : {info?.released_date}</span> <br />
    </div>
  );
};
