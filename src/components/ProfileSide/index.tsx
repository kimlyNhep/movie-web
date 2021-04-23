import { AddPhotoSvg } from '../svg';
import styles from './styles.module.css';

export const ProfileSide: React.FC = () => {
  return (
    <div className={styles.profileSide}>
      <div className={styles.photo}>
        <div className='flex flex-col items-center'>
          <AddPhotoSvg></AddPhotoSvg>
          Add Photo
        </div>
      </div>
    </div>
  );
};
