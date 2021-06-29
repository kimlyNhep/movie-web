import { Layout, Menu, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { ChangeEventHandler } from 'react';

const { Header } = Layout;

export const Navbar: FC<{
  onSearch?: ChangeEventHandler<HTMLInputElement>;
}> = ({ onSearch }) => {
  return (
    <Header>
      <Menu mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>Movies</Menu.Item>
        <Menu.Item key='2'>Coming Soon</Menu.Item>
        <Menu.Item key='3'>News</Menu.Item>
        <Menu.Item key='4'>About Us</Menu.Item>
        <Menu.Item key='5'>Announment</Menu.Item>
        <Menu.Item>
          <Input
            placeholder='Input to search'
            size='small'
            suffix={<SearchOutlined />}
            onChange={onSearch}
          />
        </Menu.Item>
      </Menu>
    </Header>
  );
};
