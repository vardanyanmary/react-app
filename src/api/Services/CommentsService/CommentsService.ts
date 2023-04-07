import { api } from "../../api";
import { Comment } from "./type";

class CommentsService {

  async getAllComments() {
      const res = await api.get<Comment[]>("comments")
      return res.data
  }

  async getCommentById( id: number ) {
      const res = await api.get<Comment>(`comments/${id}`)
      return res.data
  }

}

const commentsService = new CommentsService();
export default commentsService;