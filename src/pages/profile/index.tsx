import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { ProfileSide } from '../../components/ProfileSide';
import Layout from '../../layout';

const ProfileDetail = () => {
  const router = useRouter();

  const handleAddMovie = () => {
    router.push('/movie/create');
  };

  const handleNewGenre = () => {
    router.push('/genre/create');
  };

  return (
    <Layout>
      <ProfileSide></ProfileSide>
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
