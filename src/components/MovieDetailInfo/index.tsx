import { Divider } from 'antd';
import { IMovieInfoType } from '../../types/movie';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment as any);

interface IMovieInfoProps {
  info?: IMovieInfoType;
}

export const MovieDetailInfo: React.FC<IMovieInfoProps> = ({ info }) => {
  let time = 0;
  let min = info?.duration! / 60;
  if (min > 60) {
    min = min - 60;
    time++;
  }

  return (
    <div>
      <strong>Information</strong>
      <Divider className='mt-2 bg-gray-600' />
      <span>Type : {info?.type}</span> <br />
      <span>Espisodes : {info?.episode}</span>
      <br />
      <span>
        Durations : <span>{time}</span> h <span>{min}</span> min
      </span>
      <br />
      <span>Status : {info?.status}</span> <br />
      <span>Producers : {info?.producer}</span> <br />
      <span>Released Date : {info?.released_date}</span> <br />
    </div>
  );
};
