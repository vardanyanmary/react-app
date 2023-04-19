import AlbumCard from "../../Components/UI/AlbumCard/AlbumCard";
import { useAlbums } from "../../Components/hooks/useAlbums";
import cls from "./AlbumsPage.module.scss";
import { useEffect } from "react";

const AlbumsPage = () => {
  const {
    albums,
    getAllAlbums,
    navigateSingleAlbumsPage,
    isLoading,
    error,
  } = useAlbums();

  useEffect(() => {
    if (!albums.length) {
        getAllAlbums();
    }
  }, [getAllAlbums, albums]);

  if (isLoading) {
    return <div className={cls.AlbumsPage}>Loading...</div>;
  }

  if (error) {
    return <div className={cls.AlbumsPage}>{error}</div>;
  }

  return (
    <div className={cls.AlbumsList}>
      <h2> Albums List </h2>
      <div>
        {albums.map((album) => (
          <AlbumCard
            album={album}
            key={album.id}
            navigateSingleAlbumPage ={navigateSingleAlbumsPage}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
