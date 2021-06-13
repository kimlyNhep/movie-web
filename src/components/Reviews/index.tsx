import { useRouter } from 'next/router';
import { ReviewItem } from './ReviewItem';
import { List, Divider, Input, Button } from 'antd';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import {
  GetMovieDocument,
  MeDocument,
  MeQuery,
  useCommentMovieMutation,
  useGetCommentsQuery,
  useMeQuery,
} from '../../generated/graphql';
import { IReviewsType } from '../../types/movie';
import withClient from '../../apollo/client';
import { useApolloClient } from '@apollo/client';

const Reviews: React.FC = () => {
  const { data } = useMeQuery();
  const [commentValue, setCommentvalue] = useState<string>();
  const [commentRequest] = useCommentMovieMutation();
  const [isAuth, setIsAuth] = useState<boolean>();
  const router = useRouter();
  const client = useApolloClient();

  const { TextArea } = Input;
  const id = router.query.id as string;

  const { data: loadComments, loading: loadingComments } = useGetCommentsQuery({
    variables: { mid: id },
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
        refetchQueries: [
          {
            query: GetMovieDocument,
            variables: { id },
          },
        ],
      });
    }
  };

  const handleCommentChange = (event: BaseSyntheticEvent) => {
    setCommentvalue(event.target.value);
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
              <TextArea
                className='w-full'
                placeholder='Write a review'
                value={commentValue}
                onChange={handleCommentChange}
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

export default withClient(Reviews);
