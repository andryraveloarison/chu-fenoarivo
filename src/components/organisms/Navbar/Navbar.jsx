import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  // Fonction pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Active la classe si on scroll plus de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isHome && isScrolled ? styles.scrolled : !isHome? styles.scrolled : ""}`}>
      <a className={styles.title} href="/">
        <img src={getImageUrl("nav/rep.jpg")} alt="republique logo" className={styles.heroImg} />
        <img src={getImageUrl("nav/ministera.png")} alt="ministere logo" className={styles.heroImg} />
        <img src={getImageUrl("nav/dgfs.png")} alt="dgfs logo" className={styles.heroImg} />
        <img src={getImageUrl("nav/chu.png")} alt="chu fenoarivo logo" className={styles.heroImg} />  
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/service">Service</Link></li>         
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};
