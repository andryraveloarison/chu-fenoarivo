import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname == "/home";

  return (
          <nav className={`${styles.navbar} ${!isHome ? styles.scrolled : ""}`}>

      <a className={styles.title} href="/">
        <img
          src={getImageUrl("nav/rep.jpg")}
          alt="republique logo"
          className={styles.heroImg}
        />

        <img
        src={getImageUrl("nav/ministera.png")}
        alt="ministere logo"
        className={styles.heroImg}
        />
        <img
          src={getImageUrl("nav/dgfs.png")}
          alt="dgfs logo"
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
            <Link to="/home">
                <a href="" target="_blank">Accueil</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
                <a href="" target="_blank">À propos</a>
            </Link>
          </li>
          <li>
            <Link to="/service">
                <a href="" target="_blank">Service</a>
            </Link>
          </li>         
          <li>
            <Link to="/contact">
                <a href="" target="_blank">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
