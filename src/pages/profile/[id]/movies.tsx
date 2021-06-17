import { Divider, List } from 'antd';
import { useGetMoviesByUserQuery } from '../../../generated/graphql';
import Layout from '../../../layout';

interface IMovieListProps {
  id: string;
  title: string;
  photo: string;
  description: string;
}

const Movies = () => {
  const { data: moviesData } = useGetMoviesByUserQuery();

  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <strong>Movie List</strong>
        <Divider style={{ margin: 0, width: '100%' }} />
        <List
          itemLayout='vertical'
          size='large'
          dataSource={moviesData?.getMoviesByUser.movies as IMovieListProps[]}
          renderItem={(item) => (
            <div key={item.id} className='flex mt-5 h-20'>
              <a href={`/movie/detail/${item.id}`}>
                <img src={item.photo} className='h-full' />
              </a>
              <div className='flex flex-col ml-5 justify-center'>
                <a href={`/movie/detail/${item.id}`}>{item.title}</a>
                <span></span>
              </div>
            </div>
          )}
        ></List>
      </div>
    </Layout>
  );
};

export default Movies;
