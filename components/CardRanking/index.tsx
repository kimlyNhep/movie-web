import { List } from 'antd';

interface CardProps {
  title: string;
  rank: number;
  href: string;
  description: string;
}

export const CardRanking: React.FC<CardProps> = ({ title, rank, href, description }) => {
  return (
    <List.Item key={title}>
      <div className='flex'>
        <span className='font-bold'>{rank}</span>
        <a href={href} style={{ minWidth: '50px', maxHeight: '70px' }} className='ml-3'>
          <img
            src='https://cdn.myanimelist.net/r/50x70/images/anime/9/9453.webp?s=bcf651aae2cd301a32bcc46e317a98bc'
            alt='ranking'
            width='50'
          />
        </a>
        <div className='flex flex-col ml-3'>
          <a href={href}>{title}</a>
          <span className='text-gray-500 text-xs'>{description}</span>
        </div>
      </div>
    </List.Item>
  );
};
