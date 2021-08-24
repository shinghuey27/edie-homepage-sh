import { useState } from "react";
import styles from "./header.module.scss";
import "./App.scss";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = (event) => {
    setMenu(!menu);
  };
  return (
      <header className={styles.header}>
        <div className={styles.logoName}>Edie</div>
        <nav>
          <ul className={menu ? styles.listOverviewOpen : styles.listOverview}>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Home
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Services
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Our Works
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Clients
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.navLink} href="/">
                Contact
              </a>
            </li>
          </ul>
          <i
            onClick={handleMenuClick}
            className={`${menu ? "fas fa-times" : "fal fa-bars"}`}
            />
        </nav>
      </header>
  );
};

export default Header;
