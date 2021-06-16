import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { ProfileSide } from '../../components/ProfileSide';
import {
  MeDocument,
  MeQuery,
  useGetMovieStateQuery,
  useMeQuery,
  UserRoles,
} from '../../generated/graphql';
import Layout from '../../layout';
import { IUserType } from '../../types/user';
import cx from 'classnames';
import styles from './styles.module.css';
import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileDetail = () => {
  const { data } = useMeQuery();
  const router = useRouter();
  const client = useApolloClient();
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const { data: movieStateData } = useGetMovieStateQuery();

  const handleAddMovie = () => {
    router.push('/movie/create');
  };

  const handleNewGenre = () => {
    router.push('/genre/create');
  };

  // const id = router.query.id as string;

  const fetchUser = async () => {
    const currentUser = await client.query<MeQuery>({ query: MeDocument });
    const adminState = currentUser.data.me?.role === UserRoles.Admin;
    setIsAdmin(adminState);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout>
      <div className={cx(styles.profileInfo, 'flex flex-col h-full')}>
        <ProfileSide profile={data?.me as IUserType} />
        <div className='mt-1 bg-gray-100'>
          <strong>Status</strong>
        </div>
        <div className='bg-gray-200'>
          <strong>Joined</strong>
        </div>
        <div className='bg-gray-100'>
          <strong>Last Online</strong>
        </div>
        <Button type='primary' size='small' className='mt-1'>
          Movie List
        </Button>
        <div className='mt-5 flex justify-between'>
          <strong>Friends</strong>
          <div>All</div>
        </div>
        <Divider />
      </div>
      <div className='flex w-full'>
        <Divider type='vertical' style={{ height: '100%' }} />
        <div className='w-full'>
          <div>
            <strong>Biology</strong>
          </div>
          <Divider className='w-full' style={{ margin: 0 }} />
          <div>
            <strong>Statistics</strong>
          </div>
          <Divider className='w-full' style={{ margin: 0 }} />
          <div className='flex justify-between mt-5'>
            <div style={{ width: '45%' }}>
              <div>
                <strong>Movie State</strong>
              </div>
              <Divider style={{ margin: 0 }} />
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-green-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Watching</div>
                </div>
                <span>{movieStateData?.getMovieState.watching}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-gray-400 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Plan to watch</div>
                </div>
                <span>{movieStateData?.getMovieState.planToWatch}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-blue-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Completed</div>
                </div>
                <span>{movieStateData?.getMovieState.completed}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-red-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Drop</div>
                </div>
                <span>{movieStateData?.getMovieState.drop}</span>
              </div>
            </div>
            <div style={{ width: '45%' }}>
              <div>
                <strong>Last Movie Updated</strong>
              </div>
              <Divider style={{ margin: 0 }} />
            </div>
          </div>
          <Divider style={{ margin: 0 }} />
          <Button size='small' onClick={handleAddMovie} className='mt-3'>
            Add Movie
          </Button>
          {isAdmin && (
            <Button size='small' onClick={handleNewGenre} className='ml-3'>
              New Genre
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileDetail;
