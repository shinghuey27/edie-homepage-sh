import styles from "./header.module.scss";
import "./App.scss";
const Header = (props) => {

  return (
      <header className={styles.header}>
        <div className={styles.logoName}>Edie</div>
        <nav>
          <ul className={props.menu ? styles.listOverviewOpen : styles.listOverview}>
            <li className={styles.list}>
              <a onClick={props.handleMenuClick} className={styles.navLink} href="#home">
                Home
              </a>
            </li>
            <li className={styles.list}>
              <a onClick={props.handleMenuClick} className={styles.navLink} href="#service">
                Services
              </a>
            </li>
            <li className={styles.list}>
              <a onClick={props.handleMenuClick} className={styles.navLink} href="#work">
                Our Works
              </a>
            </li>
            <li className={styles.list}>
              <a onClick={props.handleMenuClick} className={styles.navLink} href="#client">
                Clients
              </a>
            </li>
            <li className={styles.list}>
              <a onClick={props.handleMenuClick} className={styles.navLink} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i
            onClick={props.handleMenuClick}
            className={`${props.menu? "fas fa-times" : "fal fa-bars"}`}
            />
        </nav>
      </header>
  );
};

export default Header;
