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
      Situé à 13 km d’Antananarivo sur la route nationale n°1 reliant Antananarivo -Tsiroanomandidy, dépanné par les centres de santé de base niveau II de Fenoarivo et d’Ambatomirahavavy pour les soins de premier degré, le CHU Fenoarivo dessert non seulement toute l’étendue de la région d’Analamanga, mais aussi une majeure partie des régions limitrophes, surtout dans le domaine de la Pneumo-phtisiologie. 
      <br></br>      <br></br>

      Outre les activités inhérentes à son existence, à laquelle l’hôpital a été toujours connu (ex-sanatorium), le centre hospitalier est devenu un centre de soins diversifiés et spécialisés, et également un centre de formation pour le personnel de santé (médical, paramédical), et même pour le personnel administratif exerçant dans le domaine de la santé.
      <br></br>      <br></br>


      Le CHU Fenoarivo est également un centre de consultation de troisième degré, offrant des services d’hospitalisation dans divers domaines, tels que la médecine générale, la cardiologie, la pneumo-phtisiologie, ainsi que des soins pour le CRPC et la TBMR. Il propose également des explorations médicales, telles que le radiodiagnostic, les analyses biologiques, les explorations fonctionnelles respiratoires, la fibroscopie bronchique, l’échographie et l’électrocardiographie.
      <br></br>      <br></br>


      Le Centre Hospitalier Universitaire Fenoarivo dispose également d'un service d’acupuncture, d’ATO (Accueil, Triage, Orientation), ainsi que des services d’urgence et de réanimation.
      </p>
      </div>
    </div>
    </>

  );
};
