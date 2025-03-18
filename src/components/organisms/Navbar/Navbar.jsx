import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img
          src={getImageUrl("nav/rep.jpg")}
          alt="republique logo"
          className={styles.heroImg}
        />
        <img
          src={getImageUrl("nav/dgfs.png")}
          alt="dgfs logo"
          className={styles.heroImg}
        />
        <img
        src={getImageUrl("nav/ministera.png")}
        alt="ministere logo"
        className={styles.heroImg}
        />
        <img
        src={getImageUrl("nav/chu.png")}
        alt="chu fenoarivo logo"
        className={styles.heroImg}
        />  
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
           <li>
            <a href="#projects">Accueil</a>
          </li>
          <li>
            <a href="#about" >À propos</a>
          </li>
          <li>
            <a href="#experiences">Service</a>
          </li>
          <li>
            <a href="#skills">Actualite</a>
          </li>
         
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
