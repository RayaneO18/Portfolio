import React, { useState } from "react";
import styles from "@/styles/Project.module.css";

// Création de card
export default function Project() {
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

  return (
    <div className={styles.container}>
      <div
        className={styles.projectCard}
        onClick={(e) => handleLinkClick(e, "card1")}
      >
        {/* Styles de la première carte */}
        <img src="MOVIZ.png" alt="" className={styles.projectImage} />
        <h2 className={styles.projectName}>MyMoviz</h2>
        <p className={styles.descriptionProject}>
          Liste de films, via une API, avec un résumé ainsi que la note moyenne
          donnée par le public
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
          Liste de films, via une API, avec un résumé ainsi que la note moyenne
          donnée par le public
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
            <button onClick={() => closeModal("card1")}>Fermer la modal</button>
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
            <button onClick={() => closeModal("card2")}>Fermer la modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
