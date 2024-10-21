/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa'; // React Icons
import Rating from 'react-rating';
import HeadingText from '../../../../components/HeadingText';
import { useAddProductMutation } from '../../../../Redux/features/product/productApis';

type TProduct = {
  category: string;
  title: string;
  price: string | number;
  quantity: string | number;
  description: string;
  rating: number;
  image: string;
};

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<TProduct>();
  const [rating, setRating] = useState(0); // State for rating
  const [imgUrl, setImgUrl] = useState(''); // State for uploaded image
  const [addProduct, { data: prodRes }] = useAddProductMutation();
  // Handle form submission
  const onSubmit = async (data: TProduct) => {
    try {
      const productData = {
        ...data,
        rating, // Include rating from state
        image: imgUrl, // Include uploaded image URL
      };
      productData.price = parseFloat(productData.price as string);
      productData.quantity = parseInt(productData.quantity as string);
      // Handle the logic for submitting the product data here
      addProduct(productData);
    } catch (error) {
      toast.error('Error adding product');
      console.log(error);
    }
  };

  // Handle image upload to Imgbb
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=08dea360d9faac6a8de4cf6f88727008`,
          {
            method: 'POST',
            body: formData,
          }
        );
        const result = await response.json();
        setImgUrl(result.data.url);
        toast.success('Image uploaded successfully!');
      } catch (error) {
        toast.error('Image upload failed');
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (prodRes?.success) {
      toast.success(prodRes?.message);
      reset();
      setImgUrl('');
      setRating(0);
    }
  }, [prodRes, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-10/12 mx-auto p-5">
      <HeadingText heading="Add Product" style="mb-5" />

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <input
          type="text"
          {...register('category', { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter category"
        />
      </div>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter title"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price</label>
        <input
          type="number"
          {...register('price', { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter price"
        />
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <input
          type="number"
          {...register('quantity', { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter quantity"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          {...register('description', { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter description"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Product Image</label>
        <div className="flex items-center">
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {imgUrl && (
          <img
            src={imgUrl}
            alt="Uploaded Product"
            className="mt-4 w-24 h-24 "
          />
        )}
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Rating</label>

        {
          // @ts-ignore
          <Rating
            initialRating={rating}
            onChange={rate => setRating(rate)}
            emptySymbol={<FaRegStar className="text-3xl " />}
            fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
          />
        }
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
