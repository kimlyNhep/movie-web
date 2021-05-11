import { IUserType } from '../../types/user';
import { AddPhotoSvg } from '../svg';
import styles from './styles.module.css';

interface IProfileProps {
  profile?: IUserType;
}

export const ProfileSide: React.FC<IProfileProps> = ({ profile }) => {
  return (
    <div className={styles.profileSide}>
      <div className={styles.photo}>
        <div className='flex flex-col items-center'>
          {profile ? (
            <img src={profile?.photo} alt='listing' />
          ) : (
            <>
              <AddPhotoSvg />
              <span> Add Photo</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
