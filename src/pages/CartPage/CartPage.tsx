/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from 'react-router-dom';
import CartCard, { TCart } from '../../components/CartCard';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import NotDataFound from '../../components/NotDataFound';
import { useGetCartByEmailQuery } from '../../Redux/features/cart/cartApis';
import { useAppSelector } from '../../Redux/hooks/hooks';

const CartPage = () => {
  const { user } = useAppSelector(state => state.tree_plant_auth);
  // @ts-ignore
  const { data: cartRes } = useGetCartByEmailQuery(user?.email);
  const cartProducts = cartRes?.data;
  const totalCost =
    cartProducts &&
    cartProducts.reduce(
      (acc: number, item: TCart) =>
        (((item.price as number) + acc) * item?.quantity) as number,
      0
    );
  return (
    <div className="my-[116px]">
      <Container>
        <HeadingText style="text-center" heading="My Cart" />
        <div className="flex mt-12 justify-between gap-10">
          <div className="flex-1">
            {cartProducts && cartProducts?.length > 0 ? (
              cartProducts.map((product: TCart) => (
                <CartCard key={product._id} product={product} />
              ))
            ) : (
              <>
                <NotDataFound text="You do not added any product please add a product to checkout!" />
                <div className="text-center">
                  <Link to="/products">
                    <button className="btn-primary ">Contine Shopping</button>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Summary Section */}
          {cartProducts && cartProducts.length > 0 && (
            <div className="lg:w-1/4 p-4 rounded-md shadow-md">
              <h3 className="font-semibold font-headingFont mb-5">Summary</h3>
              {cartProducts &&
                cartProducts.map((item: TCart) => (
                  <p
                    key={item._id}
                    className="flex mb-3 items-center justify-between gap-10"
                  >
                    {item?.title as string}{' '}
                    <span className="text-red-500">
                      ${item?.price as number}
                    </span>
                  </p>
                ))}
              <p className="font-semibold flex justify-between items-center gap-10">
                Subtotal: <span className="text-red-500">${totalCost}</span>
              </p>

              <Link to={`/payments/${totalCost}`}>
                <button
                  disabled={!totalCost}
                  className={`w-full mt-5 ${
                    !totalCost
                      ? 'bg-slate-400 px-8 py-2 rounded-full'
                      : 'btn-primary'
                  }`}
                >
                  Checkout
                </button>
              </Link>
              <div className="flex mt-5 w-fit mx-auto items-center gap-2">
                <img
                  className="w-8 h-6 rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOsJUPXMDaZXyJA2PxFYv2gEVkGofB0fsyQ&s"
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJHTQcSmS0EhhMlMbQhhYhhY2b8Xy-QBkkA&s"
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded"
                  src="https://static-00.iconduck.com/assets.00/discover-icon-2048x1313-4euh7fjo.png"
                  alt=""
                />
                <img
                  className="w-8 scale-150 h-6 rounded"
                  src="https://www.svgrepo.com/show/328148/amex.svg"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
