import styles from "@/styles/About.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

export default function About() {
  const form = useRef();
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Vérifier que les champs ne sont pas vides
    if (!userName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Please enter your name.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
    }

    if (!userEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userEmail: "Please enter your email.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userEmail: "" }));
    }

    if (!message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter your message.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userEmail: "Please enter a valid email address.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userEmail: "" }));
    }

    emailjs
      .sendForm(
        "service_xqviwev",
        "template_d7flgo6",
        form.current,
        "2g8Ho1VqCHrZIrNva"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.meContainer}>
          <div>HEY,</div>
          <div className={styles.name}> Je suis RAYANE OUAANI</div>
          <div className={styles.poste}> DEVELOPPEUR FULLSTACK</div>
          <div className={styles.texte}>
            Je suis un jeune passionné de technologie. Toujours curieux de
            comprendre comprendre comment le monde fonctionne, je me suis lancé
            dans le développement web. Chaque ligne de code que j&apos;écris est
            une exploration, une occasion d&apos;apprendre et de contribuer à
            quelque chose de nouveau. D&apos;apprendre et de contribuer à
            quelque chose de nouveau.
          </div>
        </div>
        <div>
          <img
            src="profile_picture.jpg"
            alt=""
            className={styles.profil_picture}
          />
        </div>
      </div>
      <div className={styles.hardskill}>
        <div className={styles.title}>HARDSKILL</div>
        <div className={styles.langue}>
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

      {/* section Projet */}
      <section id="project">
        <div className={styles.project}>
          <div className={styles.title}>PROJECT</div>

          <div className={styles.cards_project}>
            {/* Premiere card */}
            <div className={styles.grid}>
              <div className={styles.card}>
                <h1 className={styles.card__header}>Moviz</h1>
                <br />

                <img
                  className={styles.card__img}
                  src="MOVIZ.png"
                  alt="image Moviz"
                />
                <div className={styles.card__content}>
                  <h2 className={styles.card__header}>React/JS</h2>
                  <div className={styles.card__text}>
                    <p className={styles.card__text}>
                      Moviz est un site web dédié aux amateurs de cinéma,
                      mettant en avant leurs films préférés grâce à
                      l&apos;intégration d&apos;une API cinématographique.
                    </p>
                  </div>
                  <a
                    href="https://moviz-keet4f8j0-rayanes-projects-5ede2bce.vercel.app"
                    target="_blank"
                  >
                    <button className={styles.card__btn}>
                      Explore <span>&rarr;</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* deuxieme card */}
            <div className={styles.grid}>
              <div className={styles.card}>
                <h1 className={styles.card__header}>SearchJob</h1>
                <br />

                <img className={styles.card__img} src="JOB.png" alt="" />
                <div className={styles.card__content}>
                  <h2 className={styles.card__header}>Symfony/PHP</h2>
                  <div className={styles.card__text}>
                    <p>
                      Ce site permet aux utilisateurs de consulter des offres
                      d&apos;emploi et de postuler à ces offres. Les
                      utilisateurs peuvent également créer un compte et publier
                      des offres d&apos;emploi.
                    </p>
                  </div>
                  <a
                    href="https://searchjob.osc-fr1.scalingo.io"
                    target="_blank"
                  >
                    <button className={styles.card__btn}>
                      Explore <span>&rarr;</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page de contact */}
      <section id="contact">
        <div className={styles.container_formulaire}>
          <div className={classNames(styles.formulaire, styles.center)}>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <span className={styles.error}>{errors.userName}</span>
              <label>Email</label>
              <input type="email" name="user_email" />
              <span className={styles.error}>{errors.userEmail}</span>
              <label>Message</label>
              <textarea name="message" />
              <span className={styles.error}>{errors.message}</span>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
