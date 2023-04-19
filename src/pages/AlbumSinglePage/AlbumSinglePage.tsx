import { Link, redirect, useParams } from "react-router-dom";
import cls from "./AlbumSinglePage.module.scss";
import { useAlbums } from "../../Components/hooks/useAlbums";
import AlbumCard from "../../Components/UI/AlbumCard/AlbumCard";
import { useEffect } from "react";

interface AlbumSinglePageProps {
  id: string; //string , because from link
}

const AlbumSinglePage = () => {
  const { id } = useParams<Partial<AlbumSinglePageProps>>();
  const { selectedData, getAlbum, isLoading, error } = useAlbums();

  if (isNaN(Number(id))) {
    redirect("albums");
  }

  useEffect(() => {
    if (!selectedData) {
      getAlbum(Number(id));
    }
  }, [getAlbum, id, selectedData]);

  if (error) {
    return <div className={cls.AlbumSinglePage}>{error}</div>;
  }
  
  return (
    <div className={cls.AlbumSinglePage}>
      {!isLoading && selectedData ? (
        <>
          <AlbumCard album ={selectedData} />
          <Link to={`/albums`}> Back </Link>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
};

export default AlbumSinglePage;