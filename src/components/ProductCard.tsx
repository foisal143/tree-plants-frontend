import { Link } from 'react-router-dom';

type TProduct = {
  _id: string;
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};
const ProductCard = ({ product }: { product: TProduct }) => {
  const { image, title, price, description, _id } = product;
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img className="h-[250px] w-full" src={image} alt={title} />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 50)}...</p>
        <p className="font-semibold">
          Price: <span className="text-red-500">${price}</span>
        </p>
        <div className="card-actions ">
          <Link className="w-full" to={`/product/${_id}`}>
            {' '}
            <button className=" btn-primary w-full">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
