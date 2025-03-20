import React, { useLayoutEffect, useRef } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import { Link } from "react-router-dom";
import { animateHero } from "../../../animations";

export const Hero = () => {

  let helloRef = useRef(null)
  let titleRef = useRef(null)
  let descriptionRef = useRef(null)
  let linkRef = useRef(null)

  useLayoutEffect(() => {

    animateHero(helloRef,titleRef,descriptionRef,linkRef)

  }, []);

  return (
    <>
    <section className={styles.container}>
      <div className={styles.content}>
        
        <p className={styles.description} ref={descriptionRef}>
          <span className={styles.job}>" Ny anio mandresy ny omaly "</span> 

        </p>
        
        <li className={styles.link}>
                {<img src={getImageUrl("hero/play.png")} alt="play icon" className={styles.image}/>}
                <Link to="/about">
                <a href="" target="_blank">Explorer</a>
                </Link>

        </li>
      </div> 
      
    </section>

    <div className={styles.containerIntro} >
      <div className={styles.bgTitle}>
        <h2 className={styles.title}> 
            Introduction
        </h2>
      </div>
      <div className={styles.aboutItems}>

      <p className={styles.intro}>

Situé à 13 km d’Antananarivo sur la route nationale n°1 reliant Antananarivo –Tsiroanomandidy, le Centre Hospitalier Universitaire Fenoarivo est situé à 18.93° de latitude sud et à 47.42° de longitude est.      <br></br>      <br></br>

Le CHU Fenoarivo est un Etablissement Publique National à Caractère Administratif, parmi les 22 CHU de Madagascar et  les 12 d’Antananarivo      <br></br>      <br></br>


Il dessert une fraction de la population de la Région d’Analamanga et une majeure partie des régions limitrophes à l’ouest d’Antananarivo, surtout dans le domaine de la Pneumo-phtisiologie.      <br></br>      <br></br>


Outre les activités inhérentes à son existence, à laquelle l’hôpital a été toujours connu (ex-sanatorium), le Centre Hospitalier est devenu un centre de soins diversifiés et spécialisés, et également un centre de formation pour le personnel de santé (médical et paramédical), et même pour le personnel administratif exerçant dans le domaine de la santé.<br></br> <br></br> 
 C’est un centre de consultation et d’hospitalisation de référence de troisième niveau et offrant des services dans divers domaines, tels que la pneumo-phtisiologie, la cardiologie et la médecine général. Il inclut le Centre de Référence de Prise en Charge de la TuBerculose Multi-Résistante (CRPC TBMR). <br></br> <br></br> 
Il propose des explorations médicales, telles que le radiodiagnostic, les analyses biologiques, les explorations fonctionnelles respiratoires, la fibroscopie bronchique, l’échographie / doppler et l’électrocardiographie.<br></br> <br></br> 
Il dispose également d'une Pharmacie, d’un Service d’Accueil-Triage-Orientation  (ATO)  ainsi que des Services d’Urgence et de Réanimation.      </p>
      </div>
    </div>
    </>

  );
};
