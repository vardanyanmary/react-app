import { Album } from "api/Services/AlbumsService/types";
import { ErrorMessage } from "shared/constants/errorMassages";

export interface AlbumsStateSchema {
    data: Album[];
    isLoading: boolean;
    error?: ErrorMessage;
    selectAlbum ?: Album;
  }