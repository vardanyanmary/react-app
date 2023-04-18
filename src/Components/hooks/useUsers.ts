import { useCallback } from "react";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../../store/features/users/model/fetchAllUsers";
import { User } from "../../api/Services/UsersService/types";
import { useSelector } from "react-redux";
import { getSelectedUser, getUsersData, getUsersError, getUsersLoading } from "../../store/features/users/selectors/users";
import { fetchUserById } from "../../store/features/users/model/fetchUserById";
import { userAction } from "../../store/features/users/userSlice/userSlice";

export function useUsers() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = useSelector(getUsersData);
  const isLoading = useSelector(getUsersLoading);
  const error = useSelector(getUsersError);
  const selectedData = useSelector(getSelectedUser); 

  const getAllUsers = useCallback(() => {
    dispatch(fetchAllUsers());
  }, []);

  const navigateSingleUserPage = useCallback(
    (user: User) => {
      navigate(`${user.id}`);
      dispatch(userAction.selectUser(user));
    },
    [dispatch]
  );

  const getUser = useCallback((userId:number) => {
    dispatch(fetchUserById(userId))
  }, [dispatch]);

  return {
    users: data,
    navigateSingleUserPage,
    isLoading,
    error,
    selectedData,
    getUser,
    getAllUsers,
  };
}
