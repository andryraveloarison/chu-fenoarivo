import React, { useState, useRef } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false); // État pour contrôler l'affichage de la popup
  const [contactNumber, setContactNumber] = useState(""); // État pour stocker le numéro à afficher dans la popup
  let linkRef = useRef(null);

  // Fonction pour ouvrir la popup avec le numéro de téléphone
  const handleContactClick = (contact) => {
    if (contact.name.toLowerCase() === "whatsapp") {
      setContactNumber(contact.numero); // Définit le numéro à afficher
      setShowPopup(true); // Affiche la popup
    }
  };

  // Fonction pour fermer la popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.footer}>
      <footer className={styles.divfooter}>
        <div className={styles.container}>
          {/* Section logos */}
          <div className={styles.logoContainer}>
            <img
              src={getImageUrl("nav/chu.png")}
              alt="CHU logo"
              className={styles.heroImg}
            />
            <div className={styles.contact}>
              <p>" Ny anio mandresy ny omaly "</p>
            </div>
          </div>
          {/* Infos de contact */}

          <ul className={styles.links}>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className={styles.content}>
            <ul className={styles.links} ref={linkRef}>
              {contacts.map((contact, id) => {
                return (
                  <li key={id} className={styles.link}>
                    <a
                      href={contact.source}
                      target="_blank"
                      onClick={() => handleContactClick(contact)} // Ajout de la fonction au clic
                    >
                      <img
                        src={getImageUrl(contact.imageSrc)}
                        alt={`${contact.name} icon`}
                        className={styles.image}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.bottom}>
            <p>Fait avec ❤️ par Ditek</p>
            <br />
            <p>© {new Date().getFullYear()} Chu fenoarivo</p>
          </div>
        </div>
      </footer>

      {/* Popup */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
          <img
                        src={getImageUrl("contact/whatsapp.png")}
                        alt={`icon`}
                        className={styles.imagebig}
                      />
            <h1>{contactNumber}</h1>
            <button onClick={closePopup} className={styles.closeBtn}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
