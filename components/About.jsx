import styles from "@/styles/About.module.css";
import React from "react";

export default function About() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.meContainer}>
          <div>HEY,</div>
          <div className={styles.name}> Je suis RAYANE OUAANI</div>
          <div className={styles.poste}>A DEVELOPPEUR FULLSTACK</div>
          <div className={styles.texte}>
            Je suis un jeune passionné de technologie. Toujours curieux de
            comprendre comprendre comment le monde fonctionne, je me suis lancé
            dans le développement web. Chaque ligne de code que j&apos;écris est
            une exploration, une occasion d&apos;apprendre et de contribuer à
            quelque chose de nouveau. D&apos;apprendre et de contribuer à
            quelque chose de nouveau.
          </div>
        </div>
        <div className={styles.img}>
          <img src="profile_picture.jpg" alt="" className={styles.picture} />
        </div>
      </div>
      <div className={styles.title}>HARDSKILL</div>
      <div className={styles.hardSkill}>
        <div className={styles.html}>
          <div className={styles.langue_name}>HTML</div>
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
