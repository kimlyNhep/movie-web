import { Input, List } from 'antd';
import { ICharacterType } from '../../types/user';

interface IListCharacterProps {
  character: ICharacterType;
  onChangeRole?: (event: any) => void;
}

export const ListCharacters: React.FC<IListCharacterProps> = ({
  character,
  onChangeRole,
}) => (
  <List.Item key={character.id}>
    <div className='flex'>
      <div className='h-full'>
        <img src={character.photo} alt='ranking' width='50' />
      </div>
      <div className='flex flex-col justify-between ml-3'>
        <div>{character.username}</div>
        <Input
          size='small'
          name={character.id}
          placeholder='role'
          onChange={onChangeRole}
          value={character.role}
        />
      </div>
    </div>
  </List.Item>
);
