import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Divider, Input, Checkbox, Alert } from 'antd';
import cls from 'classnames';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { toErrorMap } from '../../../utils/errorMap';
import { Footer } from '../../components/Footer';
import { useRegisterMutation } from '../../generated/graphql';
// import { useMutation } from '@apollo/client';

interface IRegisterProps {}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const Signup: React.FC<IRegisterProps> = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<IErrorState>();
  const [message, setMessage] = useState<JSX.Element | null>();
  const [, registerRequest] = useRegisterMutation();

  const hanldeGoHomePage = () => {
    router.push('/');
  };

  const handleLoginPage = () => {
    router.push('/login');
  };

  const handleCreateAccount = async (values: any) => {
    const { username, email, password } = values;
    const response = await registerRequest({ username, email, password });

    if (response.data?.register.user) {
      router.push('/');
    } else if (response.data?.register.errors) {
      const errors = response.data?.register.errors;
      setErrors({ error: toErrorMap(errors), status: true });
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
    <div className={cls(styles.cardOutter, 'mt-5')}>
      <Card>
        <div className={cls(styles.cardInner, 'flex-col items-center')}>
          <span className='text-lg'>Start Using theMovies</span>
          <Divider />
          <span className='text-lg'>Sign up with</span>
          <div className='flex mt-3'>
            <Button className='flex items-center mr-3 w-32'>Google</Button>
            <Button
              className='flex items-center w-32'
              style={{ backgroundColor: '#3c5b97', color: 'white' }}
            >
              Facebook
            </Button>
          </div>
          <Divider plain>Or</Divider>
          <Form
            className='flex flex-col'
            name='basic'
            layout='vertical'
            initialValues={{ remember: true, policy: false }}
            onFinish={handleCreateAccount}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item label='Username' required name='username'>
              <Input style={{ width: '400px' }} size='large' />
            </Form.Item>
            <Form.Item label='Email' required name='email'>
              <Input size='large' style={{ width: '400px' }} />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              tooltip='Password must be longer than 8 character'
              required
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

export default Signup;
