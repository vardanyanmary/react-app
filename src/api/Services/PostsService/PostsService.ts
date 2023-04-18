import { api } from "../../api";
import { Post } from "./types";

class PostService {
  async getAllPosts() {
    const res = await api.get<Post[]>("posts");
    return res;
  }

  async getPostById(id: number) {
    const res = await api.get<Post>(`posts/${id}`);
    return res;
  }
}

const postsService = new PostService();
export default postsService;

