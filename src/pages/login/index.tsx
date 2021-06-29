import { useEffect, useState } from 'react';
import { Card, Form, Button, Divider, Input, Checkbox, Alert } from 'antd';
import cls from 'classnames';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { MeDocument, MeQuery, useLoginMutation } from '../../generated/graphql';
import { toErrorMap } from '../../../utils/errorMap';
import { Footer } from '../../components/Footer';
import { NextPage } from 'next';
import cookie from 'js-cookie';

interface ILoginProps {
  error?: boolean;
}

interface IErrorState {
  status: boolean;
  error: { field: string; message: string };
}

const Login: NextPage<ILoginProps> = () => {
  const [errors, setErrors] = useState<IErrorState>();
  const router = useRouter();
  const [form] = Form.useForm();
  const [message, setMessage] = useState<JSX.Element | null>();
  const [loginRequest] = useLoginMutation({
    onCompleted({ login }) {
      if (login.accessToken) {
        cookie.set('token', login.accessToken);
        if (localStorage !== undefined)
          localStorage.setItem('token', login.accessToken);
        router.push('/');
      } else if (login.errors) {
        const errors = login.errors;
        setErrors({ error: toErrorMap(errors), status: true });
      }
    },
  });

  const handleGoHomePage = () => {
    router.push('/');
  };

  const handleSignupPage = () => {
    router.push('/signup');
  };

  useEffect(() => {
    if (errors?.status) {
      setMessage(
        <Alert
          className='pb-2'
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

  const handleLogin = async () => {
    const { username, password } = form.getFieldsValue();
    await loginRequest({
      variables: { username, password },
      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            me: data?.login.user,
          },
        });
      },
    });
  };

  return (
    <>
      <div className={cls(styles.cardOutter, 'mt-5')}>
        <Card>
          <div className={cls(styles.cardInner, 'flex-col items-center')}>
            <span className='text-lg'>Login with</span>
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
              initialValues={{ remember: true }}
              onFinish={handleLogin}
              form={form}
            >
              <Form.Item
                label='Username'
                required
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input style={{ width: '400px' }} size='large' />
              </Form.Item>
              <Form.Item
                label='Password'
                tooltip='Password must be longer than 8 character'
                required
                name='password'
                rules={[{ required: true, message: 'Please input Passwoard' }]}
              >
                <Input.Password size='large' style={{ width: '400px' }} />
              </Form.Item>
              <Form.Item name='remember' valuePropName='checked'>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item className={styles.login}>
                <Button
                  className='w-40'
                  htmlType='submit'
                  style={{ backgroundColor: '#3c5b97', color: 'white' }}
                >
                  Login
                </Button>
              </Form.Item>
              <Form.Item className={styles.forget}>
                <a className='self-center'>Forget password?</a>
              </Form.Item>
              <Form.Item className={styles.signup}>
                <Button
                  onClick={handleSignupPage}
                  className='flex items-center w-40 self-center'
                  style={{ backgroundColor: '#e2e7f4', color: '#3c5b97' }}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={handleGoHomePage}
                  className='flex items-center w-40 self-center ml-1'
                  style={{ backgroundColor: '#3c5b97', color: 'white' }}
                >
                  Back
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
        <div className='w-80 mx-auto mt-2 mb-2'>{message}</div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
