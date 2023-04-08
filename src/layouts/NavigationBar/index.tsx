import styles from "./index.module.scss";

import menuItems from "./data";

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.brand}>Photography</h1>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li className={styles.item} key={item.label}>
              <a href={item.href} title={item.label}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
