import { Divider, Tooltip } from 'antd';
import styles from './styles.module.css';

export const ScrollCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.cards}>
      <span className='font-bold'>{title}</span>
      <Divider />
      <div className={styles.wrapper}>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='Hero Academy'>
          <a className={styles.item} href='/#'>
            <img
              src='https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600'
              alt='listing'
            />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
