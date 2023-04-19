import { Album } from "../../../api/Services/AlbumsService/types";
import cls from "./AlbumCard.module.scss";

interface AlbumCardProps {
  album: Album;
  navigateSingleAlbumPage?: (album: Album) => void;
}

const AlbumCard = ({ album, navigateSingleAlbumPage }: AlbumCardProps) => {
  if (navigateSingleAlbumPage) {
    return (
      <p
        className = {`${cls.AlbumCard} ${cls.withNavigation}`}
        onClick={() => navigateSingleAlbumPage(album)}
      >
        {album.title}
      </p>
    );
  }

  return (
    <div className={cls.AlbumCard}>
      <h2>{album.title}</h2>
    </div>
  );
};

export default AlbumCard;
