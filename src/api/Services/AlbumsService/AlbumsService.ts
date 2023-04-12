import { api } from "../../api";
import { Album } from "./types";

class AlbumService {
  async getAllAlbums() {
    const res = await api.get<Album[]>("albums");
    return res.data;
  }

  async getAlbumById(id: number) {
    const res = await api.get<Album>(`albums/${id}`);
    return res.data;
  }
}

const albumsService = new AlbumService();

export default albumsService;
