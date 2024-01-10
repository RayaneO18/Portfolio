import React from "react";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.meContainer}>
          <div>HEY,</div>
          <div className={styles.name}> I'AM RAYANE OUAANI</div>
          <div className={styles.poste}>A DEVELOPPEUR FULLSTACK</div>
        </div>
        <div className={styles.img}>
          <img src="profile_picture.jpg" alt="" className={styles.picture} />
        </div>
      </div>
      <div className={styles.texte}>
        I'm a young technology enthusiast. Always curious about understanding
        how the world works, I delved into web development. Each line of code I
        write is an exploration, an opportunity to learn, and contribute to
        something new. Today, my goal is clear: to become a developer. The more
        I immerse myself in this field, the more my thirst for learning grows.
        Join me in this adventure where each day is an opportunity to evolve and
        contribute to the digital future.
      </div>
      <div className={styles.title}>HARDSKILL</div>
      <div className={styles.hardSkill}>
        <div className={styles.html}>
          <div>HTML</div>
          <img src="/langue/html.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.css}>
          <div>CSS</div>
          <img src="/langue/css.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.js}>
          <div>JavaScript</div>
          <img src="/langue/js.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.react}>
          <div>React</div>
          <img src="/langue/react.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.nextjs}>
          <div>Next.js</div>
          <img src="/langue/nextjs.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.typescript}>
          <div>TypeScript</div>
          <img src="/langue/typescript.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.php}>
          <div>PHP</div>
          <img src="/langue/php.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.symfony}>
          <div>Symfony</div>
          <img src="/langue/symfony.png" alt="" className={styles.logo} />
        </div>
        <div className={styles.mysql}>
          <div>MySQL</div>
          <img src="/langue/mysql.png" alt="" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
