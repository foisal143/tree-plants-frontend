import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import HeadingText from '../../components/HeadingText';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useUserRegisterMutation } from '../../Redux/features/user/userApis';

interface FormData {
  name: string;
  email: string;
  image: FileList;
  address: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [userRegister, { data: registerRes }] = useUserRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      // Upload image to Imgbb
      const response = await axios.post(
        'https://api.imgbb.com/1/upload?key=08dea360d9faac6a8de4cf6f88727008',
        formData
      );
      const imageUrl = response.data.data.url;

      // Log the registration data (including image URL)
      const userInf = {
        name: data.name,
        email: data.email,
        address: data.address,
        password: data.password,
        image: imageUrl, // URL of the uploaded image
        role: 'user',
        isDeleted: false,
        status: 'in-proggress',
      };

      userRegister(userInf);
      // You can handle registration logic here, e.g., sending data to your backend
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  useEffect(() => {
    if (registerRes?.success) {
      navigate('/login');
    }
  }, [registerRes, navigate]);
  return (
    <div className="flex items-center py-[116px] justify-center  bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md lg:w-1/2 mx-auto">
        <HeadingText style="text-center mb-12" heading="Register" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
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
              htmlFor="image"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register('image', { required: 'Image is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.image && (
              <span className="text-red-500 text-xs">
                {errors.image.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your address"
            />
            {errors.address && (
              <span className="text-red-500 text-xs">
                {errors.address.message}
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
          <button
            type="submit"
            className="btn-primary w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
