import { useRouter } from 'next/router';
import { ReviewItem } from './ReviewItem';
import { List, Divider, Button } from 'antd';
import { useEffect, useState } from 'react';
import {
  MeDocument,
  MeQuery,
  useCommentMovieMutation,
  useGetCommentsQuery,
  useMeQuery,
} from '../../generated/graphql';
import { IReviewsType } from '../../types/movie';
import { useApolloClient } from '@apollo/client';
import { RichEditor } from '../RichEditor';

const Reviews: React.FC = () => {
  const { data } = useMeQuery({ fetchPolicy: 'cache-only' });
  const [commentValue, setCommentvalue] = useState<string>();
  const [isAuth, setIsAuth] = useState<boolean>();
  const router = useRouter();
  const client = useApolloClient();

  const id = router.query.id as string;

  const {
    data: loadComments,
    loading: loadingComments,
    refetch,
  } = useGetCommentsQuery({
    variables: { mid: id },
  });
  const [commentRequest] = useCommentMovieMutation({
    onCompleted({ commentMovies }) {
      if (commentMovies.movie) {
        refetch();
      }
    },
  });

  const handleAddReview = async () => {
    if (commentValue) {
      await commentRequest({
        variables: { id, comments: commentValue! },
        update: (_caches, { data }) => {
          if (data) {
            setCommentvalue('');
          }
        },
      });
    }
  };

  const handleCommentChange = (value: string) => {
    setCommentvalue(value);
  };

  const fetchUser = async () => {
    try {
      const currentUser = await client.query<MeQuery>({ query: MeDocument });
      if (currentUser) setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <List
        size='large'
        itemLayout='horizontal'
        loading={loadingComments}
        dataSource={loadComments?.getComments.comments as IReviewsType[]}
        renderItem={(item) => <ReviewItem item={item} />}
      />
      <Divider />
      {isAuth && (
        <List.Item>
          <div className='w-full'>
            <div className='flex w-full'>
              <div className='mr-2'>
                <img
                  src={data?.me?.photo!}
                  alt={data?.me?.username}
                  width='50'
                />
              </div>
              <RichEditor
                theme='snow'
                content={commentValue}
                onChange={(content: string) => handleCommentChange(content)}
              />
            </div>
            <div className='flex w-full justify-end'>
              <Button
                type='primary'
                size='small'
                className='mt-1 text-center'
                onClick={handleAddReview}
              >
                Add Reviews
              </Button>
            </div>
          </div>
        </List.Item>
      )}
    </div>
  );
};

export default Reviews;
