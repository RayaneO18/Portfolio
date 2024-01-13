import styles from "@/styles/Home.module.css";
import About from "./About";
import React from "react";

const Home = () => {
  return (
    <div className={styles.accueil}>
      <About />
    </div>
  );
};

export default Home;
