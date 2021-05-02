import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  TimePicker,
  Alert,
  Steps,
} from 'antd';
import {
  MovieType,
  StatusType,
  useCreateMovieInformationMutation,
  useCreateMovieMutation,
  useGetGenresQuery,
  useUploadMoviePhotoMutation,
} from '../../../generated/graphql';
import Layout from '../../../layout';
import moment, { Moment } from 'moment';
import { toErrorMap } from '../../../../utils/errorMap';
import { useEffect, useState } from 'react';
import { UploadDropZone } from '../../../components/Upload';
import { useRouter } from 'next/router';

const { Option } = Select;
const { Step } = Steps;

interface IMovieForm {
  title: string;
  description?: string;
  photo?: string;
  genres: string[];
  type: MovieType;
  producer?: string;
  episode?: number;
  status: StatusType;
  durations?: Moment;
  releasedDate?: Moment;
}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const CreateMovie: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [movie, setMovie] = useState<{
    id: string;
    title: string;
    description: string;
  }>();
  const { data } = useGetGenresQuery();
  const [message, setMessage] = useState<JSX.Element | null>();
  const [errors, setErrors] = useState<IErrorState>();
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState();
  const [
    uploadMoviePhoto,
    { loading: photoLoading },
  ] = useUploadMoviePhotoMutation();
  const [createMovieInfoRequest] = useCreateMovieInformationMutation();
  const [
    createMovieRequest,
    { loading: movieLoading },
  ] = useCreateMovieMutation();

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };

  const format = 'HH:mm';

  const handleAddMovie = async (values: IMovieForm) => {
    const { title, description, genres } = values;
    const response = await createMovieRequest({
      variables: {
        title,
        description,
        genres,
      },
    });

    if (response.data?.createMovie.errors) {
      const errors = response.data.createMovie.errors;
      setErrors({ error: toErrorMap(errors), status: true });
    } else if (response.data?.createMovie.movie) {
      setMovie(response.data.createMovie.movie);
      setCurrent(current + 1);
    }
  };

  const handleUploadPhoto = async () => {
    if (movie) {
      const response = await uploadMoviePhoto({
        variables: {
          id: movie!.id,
          photo: selectedFile,
        },
      });

      if (response.data?.uploadMoviePhoto.errors) {
        const errors = response.data.uploadMoviePhoto.errors;
        setErrors({ error: toErrorMap(errors), status: true });
      } else if (response.data?.uploadMoviePhoto.imageUrl) {
        setCurrent(current + 1);
      }
    }
  };

  const handleAddInformation = async (values: IMovieForm) => {
    const { type, producer, episode, status, durations, releasedDate } = values;

    const time = durations?.unix();
    const date = releasedDate?.format('l');

    if (movie) {
      const response = await createMovieInfoRequest({
        variables: {
          type,
          producer,
          episode,
          status,
          durations: time,
          releasedDate: date,
          movie: movie.id,
        },
      });

      if (response.data?.createMovieInformation.errors) {
        const errors = response.data.createMovieInformation.errors;
        setErrors({ error: toErrorMap(errors), status: true });
      } else if (response.data?.createMovieInformation.info) {
        router.push('/');
      }
    }
  };

  const steps = [
    {
      title: 'Movie',
      content: (
        <Form
          {...layout}
          form={form}
          initialValues={{
            remember: true,
            durations: moment('00:00', format),
          }}
          onFinish={handleAddMovie}
        >
          <Form.Item
            label='Title'
            name='title'
            labelAlign='left'
            style={{ marginBottom: '0' }}
            rules={[{ required: true, message: 'Please input the title' }]}
          >
            <Input size='small' />
          </Form.Item>

          <Form.Item label='Description' name='description' labelAlign='left'>
            <Input.TextArea size='small' />
          </Form.Item>
          <Form.Item
            label='Genres'
            name='genres'
            labelAlign='left'
            rules={[{ required: true, message: 'Please input Genre' }]}
          >
            <Select size='small' mode='multiple'>
              {data?.getGenres.genres?.map((genre) => (
                <Select.Option value={genre.id} key={genre.id}>
                  {genre.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Adding Image',
      content: (
        <Form {...layout} form={form} onFinish={handleUploadPhoto}>
          <Form.Item label='Photo' name='photo' labelAlign='left'>
            <UploadDropZone
              setSelectedFile={setSelectedFile}
              selectedFile={selectedFile}
            />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Adding more Information',
      content: (
        <Form {...layout} form={form} onFinish={handleAddInformation}>
          <Form.Item
            label='Type'
            name='type'
            labelAlign='left'
            style={{ marginBottom: '0' }}
            rules={[{ required: true, message: 'Please input the title' }]}
          >
            <Select size='small'>
              <Option value={MovieType.Tv}>TV</Option>
              <Option value={MovieType.Movie}>Movie</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Producer'
            name='producer'
            labelAlign='left'
            style={{ marginBottom: '0' }}
          >
            <Input size='small' />
          </Form.Item>
          <Form.Item
            label='Episode'
            name='episode'
            labelAlign='left'
            style={{ marginBottom: '0' }}
          >
            <InputNumber size='small' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label='Status'
            name='status'
            labelAlign='left'
            style={{ marginBottom: '0' }}
            rules={[{ required: true, message: 'Please input the title' }]}
          >
            <Select size='small'>
              <Option value={StatusType.Completed}>Completed</Option>
              <Option value={StatusType.Ongoing}>On Going</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Duration'
            name='durations'
            labelAlign='left'
            style={{ marginBottom: '0' }}
          >
            <TimePicker
              format={format}
              size='small'
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            label='Released Date'
            name='releasedDate'
            labelAlign='left'
            style={{ marginBottom: '10px' }}
          >
            <DatePicker style={{ width: '100%' }} size='small' />
          </Form.Item>
        </Form>
      ),
    },
  ];

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
      }, 3000);
    }
  }, [errors]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <Steps size='small' current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className='steps-content mt-5'>{steps[current].content}</div>

        <div className='steps-action'>
          {current === steps.length - 1 && (
            <Button type='primary' size='small' onClick={() => form.submit()}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => prev()}
              size='small'
            >
              Previous
            </Button>
          )}
          {current === 1 &&
            (selectedFile ? (
              <Button
                type='primary'
                loading={photoLoading}
                size='small'
                htmlType='submit'
                style={{ margin: '0 8px' }}
                onClick={() => form.submit()}
              >
                Upload
              </Button>
            ) : (
              <Button
                type='primary'
                size='small'
                style={{ margin: '0 8px' }}
                onClick={() => next()}
              >
                Next
              </Button>
            ))}
          {current === 0 && (
            <Button
              type='primary'
              size='small'
              style={{ margin: '0 8px' }}
              loading={movieLoading}
              onClick={() => form.submit()}
            >
              Next
            </Button>
          )}
          <Button
            type='primary'
            size='small'
            loading={movieLoading}
            onClick={next}
          >
            Skip
          </Button>
        </div>
        <div>{message}</div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
