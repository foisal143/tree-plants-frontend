/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from 'react-router-dom';
import HeadingText from '../../../../components/HeadingText';
import NotDataFound from '../../../../components/NotDataFound';
import {
  useDeleteBookingsMutation,
  useGetbookingsQuery,
  useUpdateStatusMutation,
} from '../../../../Redux/features/booking/bookingApis';
import { useAppSelector } from '../../../../Redux/hooks/hooks';
import { FaTrash } from 'react-icons/fa';

const MyOrders = () => {
  const user = useAppSelector(state => state.tree_plant_auth.user);
  // @ts-ignore
  const { data: bookingRes } = useGetbookingsQuery(user?.email);
  const bookings = bookingRes?.data;
  const [updateStatus] = useUpdateStatusMutation();
  const [deleteBookings] = useDeleteBookingsMutation();
  const handlerCancelOrder = (id: string) => {
    updateStatus({ id, status: 'canceled' });
  };
  const handlerDeleteOrder = (id: string) => {
    deleteBookings(id);
  };
  return (
    <div className="p-5">
      <HeadingText style="text-center" heading="My Orders" />

      {/* manage orders */}
      {bookings && bookings.length > 0 ? (
        <div className="overflow-x-auto my-12">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings &&
                bookings.length > 0 &&
                // @ts-ignore
                bookings.map(item => (
                  <tr>
                    <td>
                      {
                        // @ts-ignore
                        item.productInfo.map((prod, i: number) => (
                          <p className="">
                            <p>
                              <span>{i + 1}.</span> {prod?.productId?.title}
                            </p>
                          </p>
                        ))
                      }
                    </td>
                    <td className="text-red-500">${item?.price}</td>
                    <td>{item?.email}</td>
                    <td
                      className={`${
                        (item.status === 'pending' && 'text-red-500') ||
                        (item.status === 'approved' && 'text-green-500')
                      }`}
                    >
                      {item?.status}
                    </td>
                    <td>
                      {item?.status === 'approved' ||
                      item?.status === 'canceled' ? (
                        <button
                          onClick={() => handlerDeleteOrder(item?._id)}
                          className="btn-outline btn-error btn"
                        >
                          <FaTrash />
                        </button>
                      ) : (
                        <button
                          onClick={() => handlerCancelOrder(item?._id)}
                          className="btn-outline btn-success btn"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <NotDataFound text="You Do not get any order please order first" />
          <Link to="/products">
            <button className="btn-primary mt-5">Go to Shop</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MyOrders;
