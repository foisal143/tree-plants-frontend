import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useUpdateQuantityMutation } from '../Redux/features/cart/cartApis';
import { useState } from 'react';

export type TCart = {
  title: string;
  price: number;
  category: string;
  stock: number;
  productId: string;
  quantity: number;
  email: string;
  isDeleted: boolean;
  image: string;
  _id: string;
};

const CartCard = ({ product }: { product: TCart }) => {
  const [updateQuantity] = useUpdateQuantityMutation();
  const [loading, setLoading] = useState(false);
  const handlerIncreaseQuantity = async () => {
    setLoading(true);
    if (product.stock > product.quantity) {
      const quantity = product.quantity + 1;
      await updateQuantity({ id: product._id, quantity });
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const handlerDecreaseQuantity = async () => {
    setLoading(true);
    if (product.quantity > 1) {
      const quantity = product.quantity - 1;
      await updateQuantity({ id: product._id, quantity });
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <div
      className={`lg:h-32 p-5  border lg:flex justify-between gap-5 rounded-md ${
        loading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <img className="w-24 rounded-md h-full" src={product.image} alt="" />
      <div className="flex-1 relative">
        <div className="lg:flex justify-between gap-5 items-center">
          <div>
            <h3 className="text-xl font-semibold font-headerFont">
              {product.title}
            </h3>
            <p className="text-xs">{product.category}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-red-500">
              ${product.price}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlerDecreaseQuantity}
              disabled={loading || product.quantity === 1}
              className={`px-4 py-1 rounded-md  ${
                loading || product.quantity === 1
                  ? 'bg-slate-300'
                  : 'bg-green-500'
              }`}
            >
              <FaMinus />
            </button>
            <p className="mx-2">{product.quantity}</p>
            <button
              onClick={handlerIncreaseQuantity}
              disabled={loading || product.stock <= product.quantity}
              className={`px-4 py-1 rounded-md  ${
                loading || product.stock <= product.quantity
                  ? 'bg-slate-300'
                  : 'bg-green-500'
              }`}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="text-end w-full h-full absolute -bottom-16">
          <button className="text-2xl text-red-500">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
