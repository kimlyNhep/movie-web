import { useEffect, useState } from 'react';
import { Card, Form, Button, Divider, Input, Checkbox, Alert } from 'antd';
import cls from 'classnames';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

interface ILoginProps {
  error: boolean;
}

const Login: React.FC<ILoginProps> = ({ error }) => {
  const router = useRouter();
  const [message, setMessage] = useState<JSX.Element | null>();

  const handleGoHomePage = () => {
    router.push('/');
  };

  const handleSignupPage = () => {
    router.push('/signup');
  };

  useEffect(() => {
    if (error) {
      setMessage(<Alert message='' description={error} type='error' showIcon />);
      setTimeout(() => {
        setMessage(null);
        // handleResetError();
      }, 2000);
    }
  }, [error]);

  return (
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
            // onFinish={handleLoginClick}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item label='Username' required name='username'>
              <Input style={{ width: '400px' }} size='large' />
            </Form.Item>
            <Form.Item
              label='Password'
              tooltip='Password must be longer than 8 character'
              required
              name='password'
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
      <div className='w-80 mx-auto mt-2'>{message}</div>
    </div>
  );
};

export default Login;
