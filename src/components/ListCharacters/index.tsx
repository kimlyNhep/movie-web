import { List } from 'antd';
import { ICharacterType } from '../../types/user';

export const ListCharacters: React.FC<ICharacterType> = ({
  id,
  photo,
  username,
}) => (
  <List.Item key={id}>
    <div className='flex'>
      <div className='h-full'>
        <img src={photo} alt='ranking' width='50' />
      </div>
      <div className='flex flex-col ml-3'>
        <div>{username}</div>
      </div>
    </div>
  </List.Item>
);
