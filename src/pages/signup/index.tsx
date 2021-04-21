import { useEffect } from 'react';
import { Card, Form, Button, Divider, Input, Checkbox, message } from 'antd';
import cls from 'classnames';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { useMutation } from 'urql';

interface IRegisterProps {
  error: boolean;
}

const REGISTER_MUT = `
mutation Register(
  $username: String!
  $email: String!
  $password: String!
  $role: UserRoles!
) {
  register(
    options: {
      email: $email
      username: $username
      password: $password
      role: $role
    }
  ) {
    user {
      username
    }
    errors {
      field
      message
    }
  }
}`;

const Signup: React.FC<IRegisterProps> = (props) => {
  const router = useRouter();
  const { error } = props;
  const [, handleRegister] = useMutation(REGISTER_MUT);

  const hanldeGoHomePage = () => {
    router.push('/');
  };

  const handleLoginPage = () => {
    router.push('/login');
  };

  const handleCreateAccount = async (values: any) => {
    const { username, email, password } = values;
    const response = await handleRegister({ username, email, password });
  };

  useEffect(() => {
    if (error) message.error(error, 3);
  }, [error]);

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
    </div>
  );
};

export default Signup;
