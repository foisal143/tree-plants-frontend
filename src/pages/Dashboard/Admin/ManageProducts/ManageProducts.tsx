import { FaEdit, FaTrash } from 'react-icons/fa';
import HeadingText from '../../../../components/HeadingText';
import NotDataFound from '../../../../components/NotDataFound';
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from '../../../../Redux/features/product/productApis';
import { TProduct } from '../../../Home/ProductSec/ProductSec';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const { data: prodRes } = useGetAllProductQuery({
    searchTerm: '',
    sort: '',
    page: '',
    limit: '',
  });
  const products = prodRes?.data;
  const [deletProduct] = useDeleteProductMutation();

  const handlerDeleteProduct = (id: string) => {
    const isDelete = window.confirm('Do you want to delete!');
    if (isDelete) {
      deletProduct(id);
    }
  };

  return (
    <div className="p-5">
      <HeadingText style="" heading="Manage Products" />
      {products && products.length > 0 ? (
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.length > 0 &&
                products.map((item: TProduct) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item?.image} alt={item?.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item?.title}</div>
                          <div className="text-sm opacity-50">
                            {item?.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-red-500">${item?.price}</td>
                    <td>{item?.quantity}</td>
                    <td className="flex gap-3">
                      <Link to={`/dashboard/manage-products/${item._id}`}>
                        <button className="btn btn-outline btn-success">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handlerDeleteProduct(item?._id)}
                        className="btn btn-outline btn-error"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <NotDataFound text="No Product Found" />
        </>
      )}
    </div>
  );
};

export default ManageProducts;
