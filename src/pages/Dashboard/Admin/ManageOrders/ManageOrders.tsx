/* eslint-disable @typescript-eslint/ban-ts-comment */

import HeadingText from '../../../../components/HeadingText';
import NotDataFound from '../../../../components/NotDataFound';
import {
  useGetAllBookingsQuery,
  useUpdateStatusMutation,
} from '../../../../Redux/features/booking/bookingApis';

const ManageOrders = () => {
  const [updateStatus] = useUpdateStatusMutation();
  const { data: bookingRes } = useGetAllBookingsQuery(undefined);
  const bookings = bookingRes?.data;
  const handlerStatusChanged = (id: string, status: string) => {
    updateStatus({ id, status });
  };
  return (
    <div className="p-5">
      <HeadingText style=" mb-5" heading="Manage Orders" />
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
                        (item.status === 'canceled' && 'text-red-500') ||
                        (item.status === 'approved' && 'text-green-500')
                      }`}
                    >
                      <select
                        onChange={e =>
                          handlerStatusChanged(item._id, e.target.value)
                        }
                        value={item?.status}
                        className="select select-bordered w-fit"
                      >
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="text-center">
            <NotDataFound text="You Do not get any order please order first" />
          </div>
        </>
      )}
    </div>
  );
};

export default ManageOrders;
