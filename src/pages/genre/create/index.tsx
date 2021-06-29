import { Divider, Form, Input, Button, Alert } from 'antd';
import { useCreateGenreMutation } from '../../../generated/graphql';
import Layout from '../../../layout';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IGenreForm {
  name: string;
}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const CreateMovie: React.FC = () => {
  const [message, setMessage] = useState<JSX.Element | null>();
  const [errors, setErrors] = useState<IErrorState>();
  const [createGenreRequest] = useCreateGenreMutation({
    onCompleted({ createGenre }) {
      if (createGenre.genre) router.push('/');
    },
  });
  const router = useRouter();

  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
  };

  const format = 'HH:mm';

  const handleSummiting = async (value: IGenreForm) => {
    const { name } = value;

    try {
      await createGenreRequest({
        variables: {
          name,
        },
      });
    } catch (err) {
      setErrors({
        status: true,
        error: {
          field: '',
          message: err.message,
        },
      });
    }
  };

  useEffect(() => {
    if (errors?.status) {
      setMessage(
        <Alert
          message={`${errors.error.field} ${errors.error.message}`}
          type='error'
        />
      );
      setTimeout(() => {
        setMessage(null);
        // handleResetError();
      }, 3000);
    }
  }, [errors]);

  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col w-full'>
          <span>New Genre</span>

          <Divider
            style={{ width: '100%', marginTop: '0.5rem', background: 'grey' }}
          />
        </div>
        <Form
          {...layout}
          form={form}
          initialValues={{
            remember: true,
            durations: moment('00:00', format),
          }}
          onFinish={handleSummiting}
        >
          <Form.Item
            label='Name'
            name='name'
            labelAlign='left'
            style={{ marginBottom: '0' }}
            rules={[{ required: true, message: 'Please input the title' }]}
          >
            <Input size='small' className='w-80' />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button size='small' type='primary' htmlType='submit'>
              Create New
            </Button>
          </Form.Item>
        </Form>
        <div>{message}</div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
