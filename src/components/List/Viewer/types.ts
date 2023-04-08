import { Photo } from "../../../hooks/usePhotos/types";

export type ImageViewerProps = {
  photo: Photo | null;
  toggleIsViewerOpened: () => void;
};
