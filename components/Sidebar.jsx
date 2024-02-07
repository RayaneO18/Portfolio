import styles from "@/styles/Sidebar.module.css";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Assurez-vous d'importer le style CSS
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navLinks}>
        <div className={styles.theme}>
          <Link href="/">ABOUT</Link>
        </div>

        <div className={styles.theme}>
          <Link href="#hardskill">HARDSKILL</Link>
        </div>
        <div className={styles.theme}>
          <Link href="#project">PROJECT</Link>
        </div>

        <div className={styles.theme}>
          <Link href="#contact">CONTACT</Link>
        </div>
        <div className={styles.iconLink}>
          <a
            href="https://www.linkedin.com/in/rayane-ouaani/"
            className={styles.linkedin}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              title="https://www.linkedin.com/in/rayane-ouaani/"
            />
          </a>
          <a
            href="https://github.com/RayaneO18"
            className={styles.github}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              title="https://github.com/RayaneO18"
            />
          </a>
          <span>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.email}
              title="ouaani.rayane@gmail.com"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
