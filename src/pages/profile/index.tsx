import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { ProfileSide } from '../../components/ProfileSide';
import { useMeQuery } from '../../generated/graphql';
import Layout from '../../layout';
import { IUserType } from '../../types/user';

const ProfileDetail = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  const handleAddMovie = () => {
    router.push('/movie/create');
  };

  const handleNewGenre = () => {
    router.push('/genre/create');
  };

  return (
    <Layout>
      <ProfileSide profile={data?.me as IUserType} />
      <Divider type='vertical' style={{ height: '300px' }}></Divider>
      <Button size='small' onClick={handleAddMovie}>
        Add Movie
      </Button>
      <Button size='small' onClick={handleNewGenre}>
        New Genre
      </Button>
    </Layout>
  );
};

export default ProfileDetail;
