import React from 'react';
import { Card, Divider } from 'antd';
import styles from './styles.module.css';
import cls from 'classnames';

export const ScoreBoard: React.FC = () => {
  return (
    <div className='w-full'>
      <Card
        className={cls(
          styles.card,
          'bg-gray-200 w-full border border-gray-500'
        )}
      >
        <div className='flex h-20'>
          <div className='flex flex-col'>
            <div className='bg-blue-800 w-16 h-5 rounded-sm text-white flex justify-center items-center'>
              score
            </div>
            <div className='text-2xl text-center'>7.25</div>
            <div className='text-xs text-center'>3453 users</div>
          </div>
          <Divider className='bg-gray-300 h-full' type='vertical' />
          <div className='flex items-center ml-3'>
            <div className='text-xl'>Ranked</div>
            <div className='ml-1 text-2xl'># 23</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
