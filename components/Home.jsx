import React from "react";
import Navbar from "./Navbar";
import styles from "@/styles/Home.module.css";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className={styles.accueil}>
      <About />
    </div>
  );
};

export default Home;
