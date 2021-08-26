import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.listOverview}>
          <div className={styles.list}>
            <a className={styles.divLink} href="/">
              Home
            </a>
          </div>
          <div className={styles.list}>
            <a className={styles.navLink} href="/">
              Services
            </a>
          </div>
          <div className={styles.list}>
            <a className={styles.navLink} href="/">
              Our Works
            </a>
          </div>
          <div className={styles.list}>
            <a className={styles.navLink} href="/">
              Clients
            </a>
          </div>
          <div className={styles.list}>
            <a className={styles.navLink} href="/">
              Contact
            </a>
          </div>
        </div>

        <div className={styles.socialMedia}>
          Edie
          <div className={styles.smContainer}>
            <i className={styles.iconContainer}>
              <img src="instagram.svg" alt="instagram" className={styles.icon}/>
              <img src="linkedin.svg" alt="linkedin" className={styles.icon}/>
              <img src="twitter.svg" alt="twitter" className={styles.icon}/>
            </i>
          </div>
        </div>

        <div className={styles.inputEmailOverview}>
            <label className={styles.labelContact}>
              Want us to contact you?
            </label>
            <div className={styles.inputPosition}>
              <input
                type="text"
                placeholder="Email"
                className={styles.inputEmail}
              />
              <button className={styles.buttonJoin}>Join</button>
            </div>
          </div>
      </div>

      <div className={styles.footerName}>
        {" "}
        created by <b className={styles.username}>shinghuey27</b> -
        devChallenges.io
      </div>
    </footer>
  );
};

export default Footer;
