/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import HeadingText from '../../components/HeadingText';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { useLoginMutation } from '../../Redux/features/auth/authApis';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../Redux/hooks/hooks';
import { setUser } from '../../Redux/features/auth/authSlice';
interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { data: loginRes, error }] = useLoginMutation();
  const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    console.log('Email:', data.email, 'Password:', data.password);
    // Handle login logic here
    const userInfo = { email: data.email, password: data.password };
    login(userInfo);
  };
  console.log(error);

  useEffect(() => {
    if (loginRes?.success) {
      const { token, user } = loginRes.data;
      toast.success(loginRes?.message);
      dispatch(setUser({ user, token }));
      navigate('/');
    }
    if (error) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [loginRes, dispatch, navigate, error]);

  return (
    <div className="my-[116px]">
      {/* login form section */}
      <Container>
        <div className="bg-white p-6 rounded shadow-md lg:w-1/2 mx-auto">
          <HeadingText style="text-center mb-12" heading="Please Login" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don’t have an account?{' '}
            <Link to="/register" className="text-green-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
