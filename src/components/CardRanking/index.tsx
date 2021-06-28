import { List } from 'antd';

interface ICardProps {
  title: string;
  rank: number;
  href: string;
  description: string;
  photo: string;
}

export const CardRanking: React.FC<ICardProps> = ({
  title,
  rank,
  href,
  description,
  photo,
}) => {
  return (
    <List.Item key={title}>
      <div className='flex'>
        <span className='font-bold'>{rank}</span>
        <a
          href={href}
          style={{ minWidth: '50px', maxHeight: '70px' }}
          className='ml-3'
        >
          <img src={photo} alt='ranking' width='50' />
        </a>
        <div className='flex flex-col ml-3'>
          <a href={href}>{title}</a>
          <span className='text-gray-500 text-xs'>{description}</span>
        </div>
      </div>
    </List.Item>
  );
};
