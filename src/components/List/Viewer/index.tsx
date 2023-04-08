import { FC } from "react";

import styles from "./index.module.scss";
import { ImageViewerProps } from "./types";

const ImageViewer: FC<ImageViewerProps> = ({ photo, toggleIsViewerOpened }) => {
  return (
    <>
      <div className={styles.background} onClick={toggleIsViewerOpened} />
      <img src={photo!.url} className={styles.viewer} />
    </>
  );
};

export default ImageViewer;
