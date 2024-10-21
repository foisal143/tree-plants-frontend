/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLoaderData, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useAddToCartMutation } from '../../Redux/features/cart/cartApis';
import { useAppSelector } from '../../Redux/hooks/hooks';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
const ProductDetails = () => {
  const productResponse = useLoaderData();
  const navigate = useNavigate();
  // @ts-ignore
  const product = productResponse?.data;
  const user = useAppSelector(state => state.tree_plant_auth.user);
  const [addToCart, { data: cartRes }] = useAddToCartMutation();
  const handlerAddToCart = () => {
    const cartInfo = {
      title: product?.title,
      price: product?.price,
      category: product?.category,
      stock: product?.quantity,
      productId: product?._id,
      quantity: 1,
      // @ts-ignore
      email: user?.email,
      isDeleted: false,
      image: product?.image,
    };
    addToCart(cartInfo);
  };
  useEffect(() => {
    if (cartRes?.success) {
      toast.success(cartRes?.message);
      navigate('/cart');
    }
  }, [cartRes, navigate]);
  return (
    <div className="py-[116px]">
      <Container>
        <HeadingText style="mt-12 text-center" heading="Product Details" />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center ">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img className="w-full  h-[350px]" src={product?.image} alt="" />
          </div>
          <div className="w-full space-y-5">
            <div>
              <h3 className="text-2xl font-semibold font-headerFont">
                {product?.title}
              </h3>
              <p>{product?.category}</p>
            </div>
            <p>{product?.description}</p>
            <p className="text-red-500 font-semibold text-3xl">
              ${product?.price}
            </p>
            <div className="flex items-center gap-1">
              {
                // @ts-ignore
                <Rating
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  initialRating={product?.rating}
                  readonly
                />
              }
              <p>({product?.rating})</p>
            </div>
            <p>Available: ({product?.quantity})</p>
            <button onClick={handlerAddToCart} className="btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
