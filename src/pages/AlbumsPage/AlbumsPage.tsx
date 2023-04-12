import AlbumCard from "../../Components/AlbumCard/AlbumCard";
import { useAlbums } from "../../Components/hooks/useAlbums";
import "./AlbumsPage.scss";
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
    return <div className="AlbumsPage">Loading...</div>;
  }

  if (error) {
    return <div className="AlbumsPage">{error}</div>;
  }

  return (
    <div className="AlbumsList">
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
