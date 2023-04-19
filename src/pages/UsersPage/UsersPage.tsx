import { useEffect } from "react";
import { useUsers } from "../../Components/hooks/useUsers";
import UserCard from "../../Components/UI/UserCard/UserCard";
import cls from "./UsersPage.module.scss";

const UsersPage = () => {
  const { getAllUsers, users, error, isLoading, navigateSingleUserPage } =
    useUsers();

  useEffect(() => {
    if (!users.length) {
      getAllUsers();
    }
  }, [getAllUsers, users]);

  if (isLoading) {
    return <div className={cls.UsersPage}>Loading...</div>;
  }

  if (error) {
    return <div className={cls.UsersPage}>{error}</div>;
  }

  return (
    <div className={cls.UsersList}>
      <h2> Users List </h2>
      <div>
        {users.map((user) => (
          <UserCard
            user={user}
            key={user.id}
            navigateSingleUserPage={navigateSingleUserPage}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
