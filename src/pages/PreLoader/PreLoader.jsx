import React, { useRef, useEffect } from "react";
import styles from "./PreLoader.module.css";
import { animatePreloader } from '../../animations'; // Importation des fonctions

const PreLoader = () => {
  const devRef = useRef(null);
  const creatRef = useRef(null);
  const passRef = useRef(null);
  const fenoRef = useRef(null)

  useEffect(() => {
    animatePreloader(devRef,creatRef,passRef, fenoRef)
  }, []);

  return (
    <div className={styles.preLoaderRef}>
      <div className={styles.textsContainer}>
        <span className={styles.span} ref={devRef}>Centre</span>
        <span className={styles.span} ref={creatRef}>Hospitalier</span>
        <span className={styles.span} ref={passRef}>Universitaire</span>
        <span className={styles.span} ref={fenoRef}>Fenoarivo</span>

      </div>
    </div> 
  );
};

export default PreLoader;
