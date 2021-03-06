import React, { useEffect, useState } from 'react';
import {
  Card,
  Form,
  Button,
  Divider,
  Input,
  Checkbox,
  Alert,
  message as messageAlert,
} from 'antd';
import cls from 'classnames';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { toErrorMap } from '../../../../utils/errorMap';
import { Footer } from '../../../components/Footer';
import { useCreateCharacterMutation } from '../../../generated/graphql';
import { UploadDropZone } from '../../../components/Upload';

interface IRegisterProps {}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const CreateActor: React.FC<IRegisterProps> = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<IErrorState>();
  const [message, setMessage] = useState<JSX.Element | null>();
  const [createCharacterRequest, { loading }] = useCreateCharacterMutation({
    onCompleted({ createCharacter }) {
      if (createCharacter.character) {
        messageAlert.success('Successful created new Character');
      } else {
        const errors = createCharacter.errors;
        setErrors({ error: toErrorMap(errors!), status: true });
      }
    },
  });
  const [selectedFile, setSelectedFile] = useState<
    | {
        preview: string;
      }
    | undefined
  >();

  const hanldeGoHomePage = async () => {
    await router.push('/');
  };

  const handleLoginPage = () => {
    router.push('/login');
  };

  const handleCreateAccount = async (values: any) => {
    const { username } = values;
    await createCharacterRequest({
      variables: { username, photo: selectedFile },
      update: () => {
        router.push('/');
      },
    });

    if (loading) messageAlert.loading({ content: 'Creating new Character' });
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
      }, 3000);
    }
  }, [errors]);

  return (
    <div className={cls(styles.cardOutter, 'mt-5')}>
      <Card>
        <div className={cls(styles.cardInner, 'flex-col items-center')}>
          <span className='text-lg'>Start Using theMovies</span>
          <Divider />
          <Form
            className='flex flex-col'
            name='basic'
            layout='vertical'
            initialValues={{ remember: true, policy: false }}
            onFinish={handleCreateAccount}
          >
            <Form.Item name='photo' labelAlign='left'>
              <UploadDropZone
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                height={150}
              />
            </Form.Item>
            <Divider className='mt-0' />
            <Form.Item
              label='Username'
              required
              name='username'
              rules={[
                { required: true, message: 'Please insert the username' },
              ]}
            >
              <Input style={{ width: '400px' }} size='large' />
            </Form.Item>
            <Form.Item name='policy' valuePropName='checked'>
              <Checkbox>
                I have read and agree to the
                <a className='mx-1'>Term of Service</a>and
                <a className='ml-1'>Privacy Policy</a>
              </Checkbox>
            </Form.Item>
            <Form.Item className={styles.login}>
              <Button
                className='w-48'
                htmlType='submit'
                style={{ backgroundColor: '#3c5b97', color: 'white' }}
              >
                Create New Character
              </Button>
            </Form.Item>
            <Form.Item className={styles.signup}>
              <Button
                className='flex items-center w-40 self-center'
                style={{ backgroundColor: '#e2e7f4', color: '#3c5b97' }}
                onClick={handleLoginPage}
              >
                Login
              </Button>
              <Button
                onClick={hanldeGoHomePage}
                className='flex items-center w-40 self-center ml-1'
                style={{ backgroundColor: '#3c5b97', color: 'white' }}
              >
                Home
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
      <div className='w-80 mx-auto mt-2'>{message}</div>
      <Footer />
    </div>
  );
};

export default CreateActor;
