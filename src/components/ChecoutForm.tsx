/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../Redux/hooks/hooks';
import { useGetCartByEmailQuery } from '../Redux/features/cart/cartApis';
import { TCart } from './CartCard';
import { useBookingMutation } from '../Redux/features/booking/bookingApis';

const CheckOutForm = ({ price }: { price: number }) => {
  const user = useAppSelector(state => state.tree_plant_auth.user);
  const [paymentName, setPaymentName] = useState('stripe');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    address: '',
    phone: '',
    // @ts-ignore
    email: user.email, // Pre-filled with user email
    orderNotes: '',
  });

  // @ts-ignore
  const { data: cartResponse } = useGetCartByEmailQuery(user.email);
  const cartServices = cartResponse?.success ? cartResponse.data : [];
  // stripe vars
  const stripe = useStripe();
  const elements = useElements();
  const [secretKey, setSecretKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [booking] = useBookingMutation();

  const productInfo = cartServices.map((item: TCart) => ({
    productId: item.productId,
    quantity: item.quantity,
  }));

  price = paymentName === 'cod' ? price + 0.1 : price;
  // get the payment secret
  useEffect(() => {
    fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSecretKey(data.data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmitFormSubmit = async (event: FormEvent) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      toast.error('stripe or elements not found');

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      toast.error('card not fuound');
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      toast.error(error?.message as string);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretKey, {
        payment_method: {
          card: card,
          billing_details: {
            name: formData.name,
            // @ts-ignore
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError?.message as string);
    }
    if (paymentIntent?.status === 'succeeded') {
      booking({ ...formData, productInfo, status: 'pending', price });
      toast.success('Payment success');
      // @ts-ignore
      fetch(`http://localhost:5000/api/carts/all-products/${user.email}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => console.log(data));
      setIsLoading(false);
      navigate('/cart');
    } else {
      toast.error('Payment unsuccessfull');
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlerCashonDelevery = () => {
    setIsLoading(true);
    if (user) {
      booking({ ...formData, productInfo, status: 'pending', price });
      // @ts-ignore
      fetch(`http://localhost:5000/api/carts/all-products/${user.email}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data?.success) {
            toast.success('Booking success');
            navigate('/cart');
          }
        });
      setIsLoading(false);
    }
  };

  return (
    <form
      className="lg:flex justify-between gap-10 w-full "
      onSubmit={
        paymentName === 'stripe'
          ? handleSubmitFormSubmit
          : handlerCashonDelevery
      }
    >
      <div className=" lg:w-1/2">
        <h3 className="font-headingFont font-semibold text-2xl mb-5">
          Billing Details
        </h3>
        <div className="flex justify-between gap-5">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium" htmlFor="lastName">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Md Foisal"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="companyName">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your full address "
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="country">
            Country / Region *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="United States"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="phone">
            Phone *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="you@example.com"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="orderNotes">
            Order notes (optional)
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Additional information about your order..."
          />
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="w-full p-4 rounded-md mt-12  lg:mt-32">
          <h3 className="font-semibold font-headingFont mb-5">Summary</h3>
          {cartServices &&
            cartServices.length > 0 &&
            cartServices.map((item: TCart) => (
              <p
                key={item._id}
                className="flex mb-3 items-center justify-between gap-10"
              >
                {item?.title as string}{' '}
                <span className="text-red-500">${item?.price as number}</span>
              </p>
            ))}
          {paymentName === 'cod' && (
            <p className="flex justify-between mb-5 items-center gap-10">
              COD Charge: <span className="text-red-500">$0.10</span>
            </p>
          )}
          <p className="font-semibold flex justify-between items-center gap-10">
            Subtotal: <span className="text-red-500">${price}</span>
          </p>
        </div>
        {/* payment name set */}
        <div className="flex gap-5 p-5 items-center ">
          <div
            className={`${
              paymentName === 'stripe' && 'border-4 border-green-500 rounded-md'
            } relative`}
          >
            <img
              title="Stripe payment"
              onClick={() => setPaymentName('stripe')}
              className="w-12 h-12  cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0tpPUn3i_x5jgRcENKrC5S0hfUNU1tUQRA&s"
              alt=""
            />
          </div>
          <div
            className={`${
              paymentName === 'cod' && 'border-4 border-green-500 rounded-md'
            }`}
          >
            <img
              title="Cash On Deleviry"
              onClick={() => setPaymentName('cod')}
              className="w-12 h-12 rounded-md cursor-pointer"
              src="https://www.shutterstock.com/image-vector/promotional-label-sticker-stamp-cash-600nw-264021485.jpg"
              alt=""
            />
          </div>
        </div>
        {/* payment methods */}
        {paymentName === 'stripe' ? (
          <div>
            <div className="flex justify-between items-center px-4">
              <h3 className=" my-5 font-bold font-headingFont">Credit Cards</h3>
              <div className="flex items-center gap-2">
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
            <div>
              {' '}
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
              <button
                disabled={isLoading || (!stripe && !elements)}
                className=" btn-primary w-full mt-5"
                type="submit"
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  `Pay ($${price})`
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              disabled={isLoading || (!stripe && !elements)}
              className=" btn-primary w-full mt-5"
              type="submit"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                `Procced ($${price})`
              )}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckOutForm;
