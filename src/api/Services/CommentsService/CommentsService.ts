import { api } from "../../api";
import { Comment } from "./type";

class CommentsService {

  async getAllComments() {
    try {
      const res = await api.get<Comment[]>("comments")
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async getCommentById( id: number ) {
    try {
      const res = await api.get<Comment>(`comments/${id}`)
      return res.data
    }catch (error) {
      console.log(error)
    }
  }

}

const commentsService = new CommentsService();
export default commentsService;