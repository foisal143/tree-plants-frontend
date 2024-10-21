import { FaTrash, FaUser } from 'react-icons/fa';
import HeadingText from '../../../../components/HeadingText';
import NotDataFound from '../../../../components/NotDataFound';
import {
  useAllUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from '../../../../Redux/features/user/userApis';
import { MdBlock } from 'react-icons/md';

const ManageUsers = () => {
  const { data: userRes } = useAllUserQuery(undefined);
  const users = userRes?.data;
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handlerMakeAdmin = (id: string) => {
    const userInfo = {
      role: 'admin',
    };
    updateUser({ id, userInfo });
  };
  const handlerBlockUser = (id: string) => {
    const userInfo = {
      status: 'blocked',
    };
    updateUser({ id, userInfo });
  };

  const handlerDeleteUser = (id: string) => {
    deleteUser(id);
  };

  return (
    <div className="p-5">
      <HeadingText heading="Manage Users" style="" />
      {users && users?.length > 0 ? (
        <div className="overflow-x-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.length > 0 &&
                users.map(
                  (user: {
                    name: string;
                    email: string;
                    _id: string;
                    status: string;
                    role: string;
                    address: string;
                  }) => (
                    <tr>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.address}</td>
                      <td>{user?.role}</td>
                      <td
                        className={`${
                          user.status === 'in-proggress'
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {user?.status}
                      </td>
                      <td>
                        {user.status === 'in-proggress' ? (
                          <div className="flex gap-3">
                            <button
                              onClick={() => handlerMakeAdmin(user._id)}
                              className="btn btn-outline btn-success"
                              title="Make admin"
                            >
                              <FaUser />
                            </button>
                            <button
                              onClick={() => handlerBlockUser(user._id)}
                              className="btn btn-outline btn-error"
                              title="Block User"
                            >
                              <MdBlock />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handlerDeleteUser(user._id)}
                            className="btn btn-outline btn-error"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <NotDataFound text="No user loged in" />
        </>
      )}
    </div>
  );
};

export default ManageUsers;
