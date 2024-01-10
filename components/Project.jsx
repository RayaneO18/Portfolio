import React from "react";
import styles from "@/styles/Project.module.css";

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        <img src="MOVIZ.png" alt="" className={styles.projectImage} />
        <h2 className={styles.projectName}>MyMoviz</h2>
        <p className={styles.descriptionProject}>
          List de film, via une API, avec un resumer ainsi que la note moyenne
          donner par le public
        </p>
        <a href="https://moviz-orcin.vercel.app" target="_blank">
          Visit Site
        </a>
      </div>
      <div className={styles.projectCard}>
        <img src="MOVIZ.png" alt="" className={styles.projectImage} />
        <h2 className={styles.projectName}>MyMoviz</h2>
        <p className={styles.descriptionProject}>
          List de film, via une API, avec un resumer ainsi que la note moyenne
          donner par le public
        </p>
        <a href="https://moviz-orcin.vercel.app" target="_blank">
          Visit Site
        </a>
      </div>
    </div>
  );
}
