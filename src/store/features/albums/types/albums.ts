import { Album } from "../../../../api/Services/AlbumsService/types";

export interface AlbumsStateSchema {
    data: Album[];
    isLoading: boolean;
    error?: string;
    selectAlbum ?: Album;
  }