import { useEffect, useState } from "react";

import { getFetch } from "../../ services/axios";
import { BACKEND } from "../../constants/envs";
import { Photo } from "./types";

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isViewOpened, setIsViewOpened] = useState(false);
  const [photoInViewer, setPhotoInViewer] = useState<Photo | null>(null);

  const getPhotos = async () => {
    const data = await getFetch(`${BACKEND}/photos`);

    setPhotos(data.data);
  };

  const toggleIsViewerOpened = () => {
    setIsViewOpened((prev) => !prev);
  };

  const sendPhotoToViewer = (photoIndex: number) => {
    setPhotoInViewer(photos[photoIndex]);
  };

  useEffect(() => {
    getPhotos().then();
  }, []);

  return {
    photos,
    isViewOpened,
    photoInViewer,
    toggleIsViewerOpened,
    sendPhotoToViewer,
  };
};

export default usePhotos;
