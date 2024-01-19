import styles from "@/styles/About.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState({
    card1: false,
    card2: false,
  });

  // Ouverture de la modal
  const openModal = (card) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [card]: true,
    }));
  };

  //Fermeture de modal
  const closeModal = (card) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [card]: false,
    }));
  };

  // Empêche l'ouverture de la modal si le lien est cliqué
  const handleLinkClick = (e, card) => {
    if (e.target.tagName.toLowerCase() === "a") {
      return;
    }
    openModal(card);
  };

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
      <div className={styles.container}>
        <div
          className={styles.projectCard}
          onClick={(e) => handleLinkClick(e, "card1")}
        >
          {/* Styles de la première carte */}
          <img src="MOVIZ.png" alt="" className={styles.projectImage} />
          <h2 className={styles.projectName}>MyMoviz</h2>
          <p className={styles.descriptionProject}>
            Liste de films, via une API, avec un résumé ainsi que la note
            moyenne donnée par le public
          </p>
          <a href="https://moviz-orcin.vercel.app" target="_blank">
            Visiter le site
          </a>
        </div>

        <div
          className={styles.projectCard}
          onClick={(e) => handleLinkClick(e, "card2")}
        >
          {/* Styles de la deuxième carte */}
          <img src="MOVIZ.png" alt="" className={styles.projectImage} />
          <h2 className={styles.projectName}>MyMoviz</h2>
          <p className={styles.descriptionProject}>
            Liste de films, via une API, avec un résumé ainsi que la note
            moyenne donnée par le public
          </p>
          <a href="https://moviz-orcin.vercel.app" target="_blank">
            Visiter le site
          </a>
        </div>

        {/* Première modal */}
        {isModalOpen.card1 && (
          <div
            className={styles.modalOverlay}
            onClick={() => closeModal("card1")}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenu de la modal de la carte 1 */}
              <h2>Modal Content - Card 1</h2>
              <p>Contenu de la modal...</p>
              <button onClick={() => closeModal("card1")}>
                Fermer la modal
              </button>
            </div>
          </div>
        )}

        {/* Deuxème modal */}
        {isModalOpen.card2 && (
          <div
            className={styles.modalOverlay}
            onClick={() => closeModal("card2")}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenu de la modal de la carte 2 */}
              <h2>Modal Content - Card 2</h2>
              <p>Contenu de la modal...</p>
              <button onClick={() => closeModal("card2")}>
                Fermer la modal
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.container}>
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
    </div>
  );
}
