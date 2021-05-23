import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Divider, Input, Checkbox, Alert } from 'antd';
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
  const [createCharacterRequest, { data }] = useCreateCharacterMutation();
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
    const { username, email, password } = values;
    await createCharacterRequest({
      variables: { username, email, password, photo: selectedFile },
    });

    if (data?.createCharacter.user) {
      router.push('/');
    } else if (data?.createCharacter.errors) {
      const errors = data?.createCharacter.errors;
      setErrors({ error: toErrorMap(errors), status: true });
    } else {
      console.log('Something went wrong');
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
            <Form.Item
              label='Email'
              required
              name='email'
              rules={[{ required: true, message: 'Please insert the email' }]}
            >
              <Input size='large' style={{ width: '400px' }} />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              tooltip='Password must be longer than 8 character'
              required
              rules={[{ required: true, message: 'Please insert password' }]}
            >
              <Input.Password size='large' style={{ width: '400px' }} />
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
                className='w-40'
                htmlType='submit'
                style={{ backgroundColor: '#3c5b97', color: 'white' }}
              >
                Create Account
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
