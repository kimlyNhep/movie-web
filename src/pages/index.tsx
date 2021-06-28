import { ScrollCard } from '../components/ScrollCard';
import { LeftSide } from '../components/LeftSide';
import { Layout } from 'antd';
import MainLayout from '../layout';
import { useState } from 'react';

const { Content } = Layout;

const date = new Date();
const currentYear = date.getFullYear();
const elements = [0, 1, 2, 3, 4];

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <MainLayout onSearch={(value) => setSearchText(value.target.value)}>
      <Content className='overflow-hidden border-r pr-1'>
        {elements.map((item) => (
          <div>
            <ScrollCard
              title={`Movies of ${currentYear - item}`}
              year={currentYear - item}
              searchText={searchText}
            />
          </div>
        ))}
      </Content>
      <LeftSide />
    </MainLayout>
  );
};

export default Home;
