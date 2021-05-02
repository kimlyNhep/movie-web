import {
  Divider,
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  TimePicker,
  Alert,
  Upload,
  message,
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
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

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

function beforeUpload(file: Blob) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img: Blob, callback: (result: string | undefined) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () =>
    callback(reader.result as string | undefined)
  );
  reader.readAsDataURL(img);
}

const CreateMovie: React.FC = () => {
  const { data } = useGetGenresQuery();
  const [createMovieRequest] = useCreateMovieMutation();
  const [message, setMessage] = useState<JSX.Element | null>();
  const [errors, setErrors] = useState<IErrorState>();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [selectedFile, setSelectedFile] = useState<Blob>();
  const [fileList] = useState<UploadFile<any>[]>([]);
  const [uploadMoviePhoto] = useUploadMoviePhotoMutation();
  const [createMovieInfoRequest] = useCreateMovieInformationMutation();

  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 3, span: 16 },
  };

  const format = 'HH:mm';

  const handleSummiting = async (value: IMovieForm) => {
    const {
      title,
      description,
      genres,
      type,
      producer,
      episode,
      status,
      durations,
      releasedDate,
    } = value;
    const response = await createMovieRequest({
      variables: {
        title,
        description,
        genres,
      },
    });
    if (response.data?.createMovie.movie) {
      const movie = response.data.createMovie.movie;
      await uploadMoviePhoto({
        variables: {
          id: movie.id,
          photo: selectedFile,
        },
      });

      const time = durations?.unix();
      const date = releasedDate?.format('l');

      await createMovieInfoRequest({
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
    } else if (response.data?.createMovie.errors) {
      const errors = response.data.createMovie.errors;
      setErrors({ error: toErrorMap(errors), status: true });
    }
  };

  const handleChangeImage = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(false);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });

      setSelectedFile(info.file.originFileObj);
    }
  };

  const handlePreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow!.document.write(image.outerHTML);
  };

  const onRemoveImage = () => {
    setImageUrl('');
  };

  const uploadButton = (
    <div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
  );

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
        <Form
          {...layout}
          form={form}
          initialValues={{
            remember: true,
            durations: moment('00:00', format),
          }}
          onFinish={handleSummiting}
        >
          <div className='font-bold'>Movie</div>
          <Divider
            style={{ background: 'gray', width: '100%', marginTop: '2px' }}
          />
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
          <Form.Item label='Photo' name='photo' labelAlign='left'>
            <ImgCrop rotate>
              <Upload
                listType='picture-card'
                onChange={handleChangeImage}
                onPreview={handlePreview}
                beforeUpload={beforeUpload}
                onRemove={onRemoveImage}
              >
                {fileList.length < 1 && imageUrl ? null : uploadButton}
              </Upload>
            </ImgCrop>
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
          <div className='font-bold'>Movie Information</div>
          <Divider
            style={{ background: 'gray', width: '100%', marginTop: '2px' }}
          />
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
          <Form.Item {...tailLayout}>
            <Button
              type='primary'
              htmlType='submit'
              size='small'
              className='w-20'
            >
              Save
            </Button>
          </Form.Item>
        </Form>
        <div>{message}</div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
