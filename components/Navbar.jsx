import React, { useEffect } from "react";
import styles from "@/styles/Navbar.module.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
