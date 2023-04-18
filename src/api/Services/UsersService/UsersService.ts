import { api } from "../../api";
import { User } from "./types";

class UserService {
  async getAllUsers() {
    const res = await api.get<User[]>("users");
    return res.data;
  }
  async getUserById(id: number) {
    const res = await api.get<User>(`users/${id}`);
    return res.data;
  }
}

const userService = new UserService();
export default userService;
