import { Album } from "../../api/Services/AlbumsService/types";
import "./AlbumCard.scss";

interface AlbumCardProps {
  album: Album;
  navigateSingleAlbumPage?: (album: Album) => void;
}

const AlbumCard = ({ album, navigateSingleAlbumPage }: AlbumCardProps) => {
  if (navigateSingleAlbumPage) {
    return (
      <p
        className="AlbumCard withNavigation"
        onClick={() => navigateSingleAlbumPage(album)}
      >
        {album.title}
      </p>
    );
  }

  return (
    <div className="AlbumCard">
      <h2>{album.title}</h2>
    </div>
  );
};

export default AlbumCard;
