import { Button, Divider } from 'antd';
import cls from 'classnames';
import { FacebookLogo, TwitterLogo, InstagramLogo } from '../svg';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={cls(styles.footer, 'flex flex-col items-center')}>
      <div className='flex w-60'>
        <span className='text-gray-400 whitespace-nowrap'>Follow Us</span>
        <FacebookLogo />
        <TwitterLogo />
        <InstagramLogo />
      </div>
      <Divider style={{ background: 'gray', margin: '10px', width: '80%' }} />
      <ul className='flex items-center'>
        <li>
          <Button type='link' style={{ color: 'white' }}>
            Home
          </Button>
          |
        </li>
        <li>
          <Button type='link' style={{ color: 'white' }}>
            About
          </Button>
        </li>
        <li>
          <Button type='link' style={{ color: 'white' }}>
            Support
          </Button>
        </li>
        <li>
          <Button type='link' style={{ color: 'white' }}>
            Terms
          </Button>
        </li>
        <li>
          <Button type='link' style={{ color: 'white' }}>
            Privacy
          </Button>
        </li>
      </ul>
      <span className='text-gray-400 text-xs'>©2021 All Rights Reserved.</span>
    </div>
  );
};
