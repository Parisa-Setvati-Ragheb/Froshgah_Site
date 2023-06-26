import styles from "./Footer.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const FooterPage = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.footerItem}>
          <ul>
            <li>
              {" "}
              <NavLink to="/Home">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Cntact">
                <span>contact</span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/About">
                <span>About</span>
              </NavLink>
            </li>
          </ul>
          <ul className={styles.socialMedia}>
            <li>
              {" "}
              <NavLink to="https://github.com/parisasetvati">
                <span>
                  <FaGithub className={styles.footerIcon} />
                  Github
                </span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">
                <span>
                  <FaWhatsapp className={styles.footerIcon} />
                  Whatsapp
                </span>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">
                <span>
                  <FaLinkedin className={styles.footerIcon} />
                  Linkedin
                </span>
              </NavLink>
            </li>
          </ul>
          <div className={styles.prodecurInformation}>
            <span>producer: </span>
            <span>Parisa Setvati Ragheb</span>
            <span>09037674509</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterPage;
