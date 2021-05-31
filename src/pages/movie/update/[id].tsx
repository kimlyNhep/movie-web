import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  Alert,
  Steps,
  Slider,
  List,
} from 'antd';
import {
  MovieType,
  StatusType,
  useGetCharactersQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useUpdateMovieInformationMutation,
  useUpdateMovieMutation,
  useUploadMoviePhotoMutation,
} from '../../../generated/graphql';
import Layout from '../../../layout';
import moment, { Moment } from 'moment';
import { toErrorMap } from '../../../../utils/errorMap';
import { useEffect, useState } from 'react';
import { UploadDropZone } from '../../../components/Upload';
import { useRouter } from 'next/router';
import { IMovieType } from '../../../types/movie';
import { ICharacterType } from '../../../types/user';
import { ListCharacters } from '../../../components/ListCharacters';
import _ from 'lodash';

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
  hour?: number;
  minuate?: number;
  releasedDate?: Moment;
  characters: string[];
}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const CreateMovie: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [movie, setMovie] = useState<IMovieType>();
  const { data } = useGetGenresQuery();
  const charactersQuery = useGetCharactersQuery();
  const [characters, setCharacters] = useState<ICharacterType[]>([]);
  const [message, setMessage] = useState<JSX.Element | null>();
  const [errors, setErrors] = useState<IErrorState>();
  const router = useRouter();
  const id = router.query.id as string;

  const marks = {
    1: '1',
    15: '15',
    30: '30',
    45: '45',
    59: '59',
  };

  const markHour = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };

  const movieQuery = useGetMovieQuery({
    variables: {
      id,
    },
  });
  const [selectedFile, setSelectedFile] = useState<
    | {
        preview: string;
      }
    | undefined
  >();
  const [
    uploadMoviePhoto,
    { loading: photoLoading },
  ] = useUploadMoviePhotoMutation();
  const [updateMovieInfoRequest] = useUpdateMovieInformationMutation();
  const [
    updateMovieRequest,
    { loading: movieLoading },
  ] = useUpdateMovieMutation();

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };

  const durationLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 22 },
  };

  const format = 'HH:mm';

  const handleAddMovie = async (values: IMovieForm) => {
    const { title, description, genres } = values;
    const response = await updateMovieRequest({
      variables: {
        id,
        title,
        description,
        genres,
      },
    });

    if (response.data?.updateMovie.errors) {
      const errors = response.data.updateMovie.errors;
      setErrors({ error: toErrorMap(errors), status: true });
    } else if (response.data?.updateMovie.movie) {
      setMovie(response.data.updateMovie.movie as IMovieType);
      setCurrent(current + 1);
    }
  };

  const handleUploadPhoto = async () => {
    if (movie) {
      const response = await uploadMoviePhoto({
        variables: {
          id,
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

  const handleUpdateInformation = async (values: IMovieForm) => {
    const {
      type,
      producer,
      episode,
      status,
      minuate,
      hour,
      releasedDate,
    } = values;

    const time = minuate! * 60 + hour! * 60 * 60;

    const date = releasedDate?.format('l');

    if (movie) {
      const response = await updateMovieInfoRequest({
        variables: {
          type,
          producer,
          episode,
          status,
          durations: time,
          releasedDate: date,
          movie: movie.id,
          characters: characters.map((item) => ({
            id: item.id,
            role: item.role!,
          })),
        },
      });

      if (response.data?.updateMovieInfo.errors) {
        const errors = response.data.updateMovieInfo.errors;
        setErrors({ error: toErrorMap(errors), status: true });
      } else if (response.data?.updateMovieInfo.info) {
        router.push('/');
      }
    }
  };

  useEffect(() => {
    const movie = movieQuery?.data?.getMovie.movie;

    setMovie(movie as IMovieType);

    let min = movie?.info?.duration! / 60;
    let hour = 0;
    if (min > 60) {
      hour++;
      min = min - 60;
    }

    form.setFieldsValue({
      title: movie?.title,
      description: movie?.description,
      genres: movie?.genres.map((genre) => genre.id),
      type: movie?.info?.type,
      producer: movie?.info?.producer,
      episode: movie?.info?.episode,
      status: movie?.info?.status,
      hour: hour,
      minuate: min,
      releasedDate: moment(movie?.info?.released_date),
      characters: movie?.info?.movieCharacters?.map(
        (movieCharacter) => movieCharacter.characters.id
      ),
    });

    const newCharacters = movie?.info?.movieCharacters?.map(
      (movieCharacter) => ({
        id: movieCharacter.characters.id,
        username: movieCharacter.characters.username,
        photo: movieCharacter.characters.photo,
        role: movieCharacter.role,
      })
    );

    setCharacters(newCharacters as ICharacterType[]);

    setSelectedFile({
      preview: movie?.photo as string,
    });
  }, [movieQuery.data?.getMovie.movie || id]);

  const handleChangeRole = (event: any) => {
    const { value, name } = event.target;
    const foundedIndex = characters.findIndex((item) => item.id === name);
    if (foundedIndex !== -1) {
      const newCharacters = _.cloneDeep(characters);
      newCharacters[foundedIndex].role = value;
      setCharacters(newCharacters);
      console.log(newCharacters);
    }
  };

  const handleSelectedCharacters = (values: string[]) => {
    const selectedCharacters = charactersQuery.data?.getAllCharacter.users?.reduce(
      (total: ICharacterType[], item) => {
        values.forEach((id) => {
          if (id === item.id) {
            const foundedCharacter = characters.find(
              (character) => character.id === item.id
            );
            if (foundedCharacter) total.push(foundedCharacter);
            else total.push(item as ICharacterType);
          }
        });
        return total;
      },
      []
    );

    setCharacters(selectedCharacters as ICharacterType[]);
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
              height={321}
            />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Adding more Information',
      content: (
        <Form {...layout} form={form} onFinish={handleUpdateInformation}>
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
            labelAlign='left'
            style={{ marginBottom: '0' }}
          >
            <Form.Item
              {...durationLayout}
              labelAlign='left'
              label='Hour'
              name='hour'
              className='mb-0'
            >
              <Slider marks={markHour} max={5} />
            </Form.Item>
            <Form.Item
              {...durationLayout}
              labelAlign='left'
              label='Minuate'
              name='minuate'
              className='mb-0'
            >
              <Slider marks={marks} min={1} max={59} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label='Released Date'
            name='releasedDate'
            labelAlign='left'
            style={{ marginBottom: '10px' }}
          >
            <DatePicker style={{ width: '100%' }} size='small' />
          </Form.Item>
          <Form.Item label='Characters' name='characters' labelAlign='left'>
            <Select
              size='small'
              mode='multiple'
              onChange={handleSelectedCharacters}
            >
              {charactersQuery.data?.getAllCharacter.users?.map((character) => (
                <Select.Option value={character.id} key={character.id}>
                  {character.username}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {!!characters?.length && (
            <List
              size='large'
              itemLayout='horizontal'
              dataSource={characters}
              renderItem={(item) => (
                <ListCharacters
                  character={item}
                  onChangeRole={handleChangeRole}
                />
              )}
            />
          )}
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
          {current > 0 && (
            <Button
              size='small'
              style={{ margin: '0 8px' }}
              loading={movieLoading}
              onClick={() => form.submit()}
            >
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type='primary' size='small' onClick={() => form.submit()}>
              Finish
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
                Update
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
              Update
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              type='primary'
              size='small'
              loading={movieLoading}
              onClick={next}
            >
              Skip
            </Button>
          )}
        </div>
        <div>{message}</div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
