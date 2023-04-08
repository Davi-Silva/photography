import Item from "./Item";

import usePhotos from "../../hooks/usePhotos";

import styles from "./index.module.scss";
import ImageViewer from "./Viewer";

const List = () => {
  const {
    photos,
    isViewOpened,
    photoInViewer,
    toggleIsViewerOpened,
    sendPhotoToViewer,
  } = usePhotos();

  const handleClickThumbnail = (index: number) => {
    toggleIsViewerOpened();
    sendPhotoToViewer(index);
  };

  return (
    <>
      {isViewOpened && (
        <ImageViewer
          photo={photoInViewer}
          toggleIsViewerOpened={toggleIsViewerOpened}
        />
      )}
      <ul className={styles.list}>
        {photos.map((item, index) => (
          <Item
            url={item.url}
            index={index}
            handleClickThumbnail={handleClickThumbnail}
            key={item.url}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
