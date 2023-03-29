import { api } from "../../api";

export interface Post {
  id: number;
  title: string;
  body: string;
}

class PostService {
  async getAllPosts() {
    try {
      const res = await api.get<Post[]>("posts");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPostById(id: number) {
    try {
      const res = await api.get<Post>(`posts/${id}`);
      console.log(res.data);
      return res.data;
    }catch (error) {
      console.log(error);
    }
  }
}

const postsService = new PostService();

export default postsService;
