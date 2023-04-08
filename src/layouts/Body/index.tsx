import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { BodyProps } from "./types";

import styles from "./index.module.scss";

const Body: FC<BodyProps> = ({ children }) => {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLBodyElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setMousePosition({ left: x, top: y });
  };

  useEffect(() => {
    const { left, top } = mousePosition;

    lightRef.current!.style.top = `${top}px`;
    lightRef.current!.style.left = `${left}px`;

    cursorRef.current!.style.top = `${top}px`;
    cursorRef.current!.style.left = `${left}px`;
  }, [mousePosition]);

  return (
    <body className={styles.body} onMouseMove={handleMouseMove}>
      <div className={styles.light} ref={lightRef} />
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.main}>{children}</div>
    </body>
  );
};

export default Body;
