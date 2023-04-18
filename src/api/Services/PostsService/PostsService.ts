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


thunkApi-in petq er functionin tip tayinq , errori het aseinq es el qo thunkApi-na 
inchi enq thank api-n talis , vot inqy haskana inch errorneri heta inqn ashxatum , vonc petqa reject ani
aysinqn inch api-ova inqn ashxatum taky , inch petqa return ani , typery talois enq (generic 4 hat tip enq talis u asecinq vor senc ashxati)