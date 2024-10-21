/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSingleUserQuery } from '../../../../Redux/features/user/userApis';
import { useAppSelector } from '../../../../Redux/hooks/hooks';

const UserHome = () => {
  const user = useAppSelector(state => state.tree_plant_auth.user);
  // @ts-ignore
  const { data: userRes } = useSingleUserQuery(user?.email);
  const userInfo = userRes?.data;
  console.log(userInfo);

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="border text-center space-y-5 p-10 rounded-md lg:w-1/2">
        <img
          className="w-52 mx-auto h-52 rounded-full"
          src={userInfo?.image}
          alt=""
        />
        <h3 className="font-headerFont text-xl font-semibold">
          {userInfo?.name}
        </h3>
        <p>Role: {userInfo?.role}</p>
        <p>Address: {userInfo?.address}</p>
        <p>Email: {userInfo?.email}</p>
      </div>
    </div>
  );
};

export default UserHome;
