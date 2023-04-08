import { FC } from "react";

import { ItemProps } from "./types";

import styles from "./index.module.scss";

const Item: FC<ItemProps> = ({ url, index, handleClickThumbnail }) => {
  const onClick = () => {
    handleClickThumbnail(index);
  };

  return (
    <button className={styles.item} onClick={onClick}>
      <img src={url} className={styles.image} />
    </button>
  );
};

export default Item;
