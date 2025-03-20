import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { useRef } from "react";

const Footer = () => {
  let linkRef = useRef(null)

  return (

    <div className={styles.footer}>
    <footer className={styles.divfooter}>
      <div className={styles.container}>
        {/* Section logos */}
        <div className={styles.logoContainer}>
          <img src={getImageUrl("nav/chu.png")} alt="CHU logo" className={styles.heroImg} />
          <div className={styles.contact}>
            <p>" Ny anio mandresy ny omaly "</p>
          </div>       
        </div>
        {/* Infos de contact */}


        <ul className={styles.links}>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/service">Service</Link></li>         
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className={styles.content}>


          <ul className={styles.links} ref={linkRef}>
            {
              contacts.map((contact, id) => {
                return(
                  <li key={id} className={styles.link}>
                    <a href={contact.source} target="_blank">

                      <img src={getImageUrl(contact.imageSrc)} alt="Email icon" href={contact.source} className={styles.image}/>
                    </a>
                  </li>
                )
              })
            }
            </ul>

        </div>  

        <div className={styles.bottom}>
              <p>Fait avec ❤️ par Ditek</p>
              <br></br>
              <p>© {new Date().getFullYear()} Chu fenoarivo</p>
            </div>

      </div>




    </footer>
    </div>
  );
};

export default Footer;
