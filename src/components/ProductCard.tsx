import { TProduct } from '../pages/Home/ProductSection/ProductSection';

const ProductCard = ({ product }: { product: TProduct }) => {
  const { image, title, price, description } = product;
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
          <button className=" btn-primary w-full">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
