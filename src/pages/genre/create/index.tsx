import { Divider, Form, Input, Select, Button, Alert } from 'antd';
import { useCreateGenreMutation } from '../../../generated/graphql';
import Layout from '../../../layout';
import moment, { Moment } from 'moment';
import { toErrorMap } from '../../../../utils/errorMap';
import { useEffect, useState } from 'react';

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
  const [createGenreRequest] = useCreateGenreMutation();

  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
  };

  const format = 'HH:mm';

  const handleSummiting = async (value: IGenreForm) => {
    const { name } = value;

    try {
      const response = await createGenreRequest({
        variables: {
          name,
        },
        // update: (cache, { data }) => {
        //   const existingGenres: GetGenresQuery | null = cache.readQuery({
        //     query: GetGenresDocument,
        //   });

        //   cache.writeQuery<GetGenresQuery>({
        //     query: GetGenresDocument,
        //     data: {
        //       getGenres: {
        //         genres: [
        //           ...existingGenres?.getGenres.genres,
        //           data?.createGenre.genre,
        //         ],
        //       },
        //     },
        //   });
        // },
      });

      if (response.data?.createGenre.errors) {
        console.log(response.data.createGenre.errors);
      }
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
      <div className='flex flex-col'>
        <span>New Genre</span>
        <Divider
          style={{ width: '100%', marginTop: '0.5rem', background: 'grey' }}
        />
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
              Create New Genre
            </Button>
          </Form.Item>
        </Form>
        <div>{message}</div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
