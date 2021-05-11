import {
  BellOutlined,
  HeartOutlined,
  MailOutlined,
  UserOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, Button } from 'antd';
import cls from 'classnames';
import { Navbar } from '../components/Navbar';
import { LoginSvg } from '../components/svg';
import { Footer } from '../components/Footer';
import styles from './styles.module.css';
import {
  MeDocument,
  MeQuery,
  useLogoutMutation,
  useMeQuery,
} from '../generated/graphql';
import { useRouter } from 'next/router';
import { Spin } from 'antd';

interface ILayoutProps {
  classname?: string;
}

const MainLayout: React.FC<ILayoutProps> = ({ classname, children }) => {
  const { data, loading } = useMeQuery();
  const [logoutRequest] = useLogoutMutation();
  const router = useRouter();

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  let body = null;

  if (!data?.me) {
    body = (
      <>
        <Menu.Item key='login'>
          <div className='flex items-center justify-between'>
            <div className='mr-1'>Login</div>
            <LoginSvg />
          </div>
        </Menu.Item>
        <Menu.Item key='signup'>
          <div className='flex items-center justify-between'>
            <div className='mr-1'>Join with us</div>
          </div>
        </Menu.Item>
      </>
    );
  } else if (data.me) {
    body = (
      <Menu.Item key='logout'>
        <div className='flex items-center justify-between'>
          <div className='mr-1'>Logout</div>
          <LoginSvg />
        </div>
      </Menu.Item>
    );
  }

  const handleMenuClick = (value: any) => {
    switch (value.key) {
      case 'login':
        return router.push('/login');
      case 'signup':
        return router.push('/signup');
      case 'logout':
        handleLogOut();
        break;
      default:
        return router.push('/');
    }
  };

  const handleLogOut = async () => {
    await logoutRequest({
      update: (cache) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            me: null,
          },
        });
      },
    });
  };

  const menu = <Menu onClick={handleMenuClick}>{body}</Menu>;

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
            {data?.me?.username && (
              <Button
                type='link'
                href='/profile'
                style={{ fontSize: '16px', paddingRight: '1rem' }}
              >
                {data?.me?.username}
              </Button>
            )}
            {loading && <Spin indicator={antIcon} />}
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
