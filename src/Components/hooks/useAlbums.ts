import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import albumsService from "../../api/Services/AlbumsService/AlbumsService";
import { Album } from "../../api/Services/AlbumsService/types";
import { albumAction } from "../../store/features/albums/albumSlice/albumSlice";
import {
  getAlbumsData,
  getAlbumsError,
  getAlbumsLoading,
  getSelectedAlbum,
} from "../../store/features/albums/selectors/albums";
import { fetchAllAlbums } from "../../store/features/albums/model/fetchAllAlbums";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export function useAlbums() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = useSelector(getAlbumsData);
  const isLoading = useSelector(getAlbumsLoading);
  const error = useSelector(getAlbumsError);
  const selectedData = useSelector(getSelectedAlbum);

  const getAllAlbums = useCallback(() => {
    dispatch(fetchAllAlbums())
    // dispatch(albumAction.setLoading(true));
    // dispatch(albumAction.setError(undefined));
    // try {
    //   const albums = await albumsService.getAllAlbums();
    //   dispatch(albumAction.initAlbums(albums));
    // } catch (error) {
    //   console.log(error);
    //   dispatch(albumAction.setError("error massage"));
    // } finally {
    //   dispatch(albumAction.setLoading(false));
    // }
  }, []);

  const selectAlbum = useCallback(
    (album: Album) => {
      dispatch(albumAction.selectAlbum(album));
    },
    [dispatch]
  );

  const navigateSingleAlbumsPage = useCallback(
    (album: Album) => {
      navigate(`${album.id}`);
      selectAlbum(album);
    },
    [navigate]
  );

  const getAlbum = useCallback(async (albumId: number) => {
    dispatch(albumAction.setLoading(true));
    try {
      const album = await albumsService.getAlbumById(albumId);
      selectAlbum(album);
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch(albumAction.setLoading(false));
    }
  }, []);

  return {
    albums: data,
    navigateSingleAlbumsPage,
    isLoading,
    error,
    getAllAlbums,
    selectedData,
    getAlbum,
  };
}