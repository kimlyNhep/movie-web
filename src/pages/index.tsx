import { ScrollCard } from '../components/ScrollCard';
import { LeftSide } from '../components/LeftSide';
import { Layout } from 'antd';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import MainLayout from '../layout';

const { Content } = Layout;

const Home = () => (
  <MainLayout pageProps>
    <Content className='overflow-hidden border-r pr-1'>
      <div>
        <ScrollCard title='Spring Movies 2021' />
        <ScrollCard title='Latest Updated Episode Movies' />
        <ScrollCard title='Most Popular Movies' />
      </div>
    </Content>
    <LeftSide />
  </MainLayout>
);

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
