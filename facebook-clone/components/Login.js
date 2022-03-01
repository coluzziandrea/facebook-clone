import Image from 'next/image';
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div className='grid place-items-center'>
      <Image
        src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
        height={400}
        width={400}
        objectFit='contain'
      />
      <a
        onClick={signIn}
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'
      >
        Login with Facebook
      </a>
    </div>
  );
}

export default Login;
