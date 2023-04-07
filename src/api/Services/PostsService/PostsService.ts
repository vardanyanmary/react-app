import { api } from "../../api";
import { Post } from "./types";

class PostService {
  async getAllPosts() {
    const res = await api.get<Post[]>("posts");
    return res.data;
  }

  async getPostById(id: number) {
    const res = await api.get<Post>(`posts/${id}`);
    return res.data;
  }
}

const postsService = new PostService();
export default postsService;
