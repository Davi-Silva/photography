import React from "react";
import { GITHUB } from "../../constants/envs";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.statement}>
        Developed by <a href={GITHUB}>Davi Silva</a>
      </p>
    </footer>
  );
};

export default Footer;
