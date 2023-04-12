import { RootState } from "../../..";

export const getAlbumsData = (store:RootState) => store.albums.data

export const getAlbumsLoading = (store:RootState) => store.albums.isLoading

export const getSelectedAlbum= (store:RootState) => store.albums.selectAlbum

export const getAlbumsError = (store:RootState) => store.albums.error