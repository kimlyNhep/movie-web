import { BellOutlined, HeartOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Button } from 'antd';
import cls from 'classnames';
import { Navbar } from '../components/Navbar';
import { LoginSvg } from '../components/svg';
import { Footer } from '../components/Footer';
import styles from './styles.module.css';

interface ILayoutProps {
  username?: string;
  classname?: string;
}

const MainLayout: React.FC<ILayoutProps> = ({ username, classname, children }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <div className='flex items-center justify-between'>
          <a rel='noopener noreferrer' href='/login' className='mr-1'>
            Login
          </a>
          <LoginSvg />
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className='flex items-center justify-between'>
          <a rel='noopener noreferrer' href='/login' className='mr-1'>
            Join with us
          </a>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className={cls(styles.container, classname)}>
        <div className={styles.topLayout}>
          <a href='/' className={styles.logo}>
            The Movies
          </a>
          <div className={styles.action}>
            <MailOutlined style={{ fontSize: '25px', paddingRight: '1rem' }} />
            <BellOutlined style={{ fontSize: '25px', paddingRight: '1rem' }} />
            <HeartOutlined style={{ fontSize: '25px', paddingRight: '1rem' }} />
            {username && (
              <Button
                type='link'
                href='/profile'
                style={{ fontSize: '16px', paddingRight: '1rem' }}
              >
                {username}
              </Button>
            )}
            <Dropdown overlay={menu} placement='bottomCenter' arrow>
              <UserOutlined style={{ fontSize: '25px' }} />
            </Dropdown>
          </div>
        </div>
        <Layout className={styles.layout}>
          <Navbar />
          <div className='flex bg-white border p-3'>{children}</div>
        </Layout>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
