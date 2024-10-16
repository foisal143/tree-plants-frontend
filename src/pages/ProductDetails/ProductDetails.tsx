/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
const ProductDetails = () => {
  const productResponse = useLoaderData();
  // @ts-ignore
  const product = productResponse?.data;
  return (
    <div className="py-[116px]">
      <Container>
        <HeadingText style="mt-12 text-center" heading="Product Details" />
        <div className="mt-12 lg:flex gap-10 justify-between ">
          <div className="lg:w-1/2 rounded-lg overflow-hidden">
            <img className="w-full h-[350px]" src={product?.image} alt="" />
          </div>
          <div className="lg:w-1/2 space-y-5">
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
            <button className="btn-primary">Add To Cart</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
