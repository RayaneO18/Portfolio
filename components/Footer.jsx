import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.mail}>
          <div>Mail:</div>
          <div>ouaani.rayane@gmail.com</div>
        </div>
        <div className={styles.cellphone}>
          <div>Téléphone:</div>
          <div>07 61 45 63 92</div>
        </div>
        <div className={styles.linkedin}>
          <div>
            <a
              href="https://www.linkedin.com/in/rayane-ouaani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>LinkedIn</u>
            </a>
          </div>
        </div>
        <div className={styles.github}>
          <div>
            <a href="https://github.com/RayaneO18" target="_blank">
              <u>Github</u>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
