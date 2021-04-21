import MainLayout from '../layout';
import { ScrollCard } from '../components/ScrollCard';
import { LeftSide } from '../components/LeftSide';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => (
  <MainLayout>
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

export default Home;
