import { List, Modal, Input, message } from 'antd';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { IReviewsType } from '../../../types/movie';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  GetCommentsDocument,
  useDeleteCommentMutation,
  useGetCommentLazyQuery,
  useUpdateCommentMutation,
} from '../../../generated/graphql';
import { useRouter } from 'next/router';

interface IReviewProps {
  item: IReviewsType;
}

export const ReviewItem: React.FC<IReviewProps> = ({ item }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [commentDate, setCommentDate] = useState<string>();
  const [commentText, setCommentText] = useState<string>();
  const [updateCommentRequest] = useUpdateCommentMutation();
  const [deleteRequest] = useDeleteCommentMutation();

  const [getCurrentComment, { data: currentComment }] = useGetCommentLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const { TextArea } = Input;

  const router = useRouter();
  const movieId = router.query.id as string;

  useEffect(() => {
    const date = new Date(+item.comment.createdAt);
    setCommentDate(date.toDateString());
  }, [item.comment.createdAt]);

  const handleDeleteComment = async (id: string) => {
    const response = await deleteRequest({
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GetCommentsDocument,
          variables: { mid: movieId },
        },
      ],
    });

    if (response.data?.deleteComment.errors) {
      message.error(response.data.deleteComment.errors[0]?.message);
    }
  };

  const handleEditOpen = async (id: string) => {
    getCurrentComment({ variables: { id } });
    setEditOpen(true);
  };

  const handleOnUpdateCommentText = (event: BaseSyntheticEvent) => {
    setCommentText(event.target.value);
    console.log(event.target.value);
  };

  const handleEditComment = async (id: string) => {
    const response = await updateCommentRequest({
      variables: {
        id,
        text: commentText!,
      },
      refetchQueries: [
        {
          query: GetCommentsDocument,
          variables: { mid: movieId },
        },
      ],
      update: () => {
        setCommentText('');
        setEditOpen(false);
      },
    });

    if (!response.data?.updateComment.errors) return;
  };

  const handleCancelEdit = () => {
    setEditOpen(false);
  };

  useEffect(() => {
    if (currentComment) {
      if (currentComment?.getComment.errors) {
        message.error(currentComment.getComment.errors[0].message);
        return;
      }

      setCommentText(currentComment.getComment.comment?.text!);
    }
  }, [currentComment]);

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <List.Item key={item.comment.id}>
      <div className='w-full'>
        <div className='flex w-full justify-between'>
          <div className='h-full flex'>
            <img src={item.comment.user?.photo} alt='ranking' width='50' />
            <div className='flex flex-col justify-center ml-3'>
              <div>{item.comment.user?.username}</div>
            </div>
          </div>
          <div>
            <div>{commentDate}</div>
            <div className='flex justify-end'>
              {item?.isEdit && (
                <EditOutlined
                  className='cursor-pointer mr-3'
                  style={{ color: 'blue' }}
                  onClick={() => handleEditOpen(item.comment.id)}
                />
              )}
              {item?.isDelete && (
                <DeleteOutlined
                  className='cursor-pointer'
                  style={{ color: 'red' }}
                  onClick={() => handleDeleteComment(item.comment.id)}
                />
              )}
            </div>
          </div>
        </div>
        <Modal
          title='Edit Comment'
          visible={editOpen}
          onOk={() => handleEditComment(item.comment.id)}
          onCancel={handleCancelEdit}
        >
          <TextArea
            value={commentText}
            onChange={handleOnUpdateCommentText}
          ></TextArea>
        </Modal>
        <div className='mt-4'>{item.comment.text}</div>
      </div>
    </List.Item>
  );
};
