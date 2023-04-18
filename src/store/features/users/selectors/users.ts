import { RootState } from "../../..";

export const getUsersData = (store:RootState) => store.users.data

export const getUsersLoading = (store:RootState) => store.users.isLoading

export const getSelectedUser = (store:RootState) => store.users.selectUser

export const getUsersError = (store:RootState) => store.users.error