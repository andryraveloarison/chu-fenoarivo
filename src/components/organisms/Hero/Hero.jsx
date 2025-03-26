import React, { useLayoutEffect, useRef, useState, useEffect} from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import { Link } from "react-router-dom";
import { animateHero } from "../../../animations";

const images = {

  
  cardone: [
    getImageUrl("hero/cardone/img1.jpeg"),
    getImageUrl("hero/cardone/img5.jpeg"),
    getImageUrl("hero/cardone/img6.jpeg"),
    getImageUrl("hero/cardone/img7.jpeg"),

  ],
  cardtwo: [
    getImageUrl("hero/cardtwo/img1.JPG"),
    getImageUrl("hero/cardtwo/img2.jpeg"),
    getImageUrl("hero/cardtwo/img3.jpeg"),
    getImageUrl("hero/cardtwo/img4.jpeg"),
  ],
  cardthree: [
    getImageUrl("hero/cardthree/img1.jpeg"),
    getImageUrl("hero/cardthree/img3.jpeg"),
    getImageUrl("hero/cardthree/img2.jpeg"),
    getImageUrl("hero/cardthree/img4.jpeg"),

  ],
};


export const Hero = () => {

  const motionValue = useMotionValue(0);
  const [exist, setExist] = useState(0)

  const rounded = useTransform(motionValue, (latest) => Math.round(latest));


  const [stats, setStats] = useState({
    anneesExistence: 0,
    nbEmployes: 0,
    nbLits: 0,
  });

  const startAnimation = () => {
    let count = 0;

    const interval = setInterval(() => {
      count++;

      setStats((prev) => ({
        anneesExistence: Math.min(count, 122), // Max 122 ans
        nbEmployes: Math.min(count * 5, 95 - (95 % 5)), // Ajuste pour ne pas dépasser 95
        nbLits: Math.min(count * 3, 100 - (100 % 3))+1, // Ajuste pour ne pas dépasser 100
      }));

      if (count >= 122) clearInterval(interval);
    },20); // Vitesse d'incrémentation
  };

  const [bgImages, setBgImages] = useState({
    cardone: images.cardone[0],
    cardtwo: images.cardtwo[0],
    cardthree: images.cardthree[0],
  });

  let helloRef = useRef(null)
  let titleRef = useRef(null)
  let descriptionRef = useRef(null)
  let linkRef = useRef(null)

  
  useLayoutEffect(() => {

    animateHero(helloRef,titleRef,descriptionRef,linkRef)

  }, []);

  useEffect(() => {
    let index = 0;
  
    const interval = setInterval(() => {
      index = (index + 1) % images.cardone.length;
  
      // Changer cardone immédiatement
      setBgImages((prev) => ({
        ...prev,
        cardone: images.cardone[index],
      }));
  
      // Délai pour cardtwo (1 seconde après cardone)
      setTimeout(() => {
        setBgImages((prev) => ({
          ...prev,
          cardtwo: images.cardtwo[index],
        }));
      }, 2400);
  
      // Délai pour cardthree (2 secondes après cardone)
      setTimeout(() => {
        setBgImages((prev) => ({
          ...prev,
          cardthree: images.cardthree[index],
        }));
      }, 600);
    }, 3000); // Changement toutes les 3 secondes
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description} ref={descriptionRef}>
            <span className={styles.job} translate="no">" Ny anio mandresy ny omaly "</span> 
          </p>

          <li className={styles.link}>
            {<img src={getImageUrl("hero/play.png")} alt="play icon" className={styles.image}/>}
            <Link to="/about">
              <a href="" target="_blank">Explorer</a>
            </Link>
          </li>
        </div> 
      </section>

      <div className={styles.containerIntro}>
        <div className={styles.bgTitle}>
          <h2 className={styles.title}> Introduction </h2>
        </div>
        <div className={styles.aboutItems}>
          <p className={styles.intro}>
          Le CHU Fenoarivo se trouve au point kilométrique 13 de la route nationale n°1, qui relie Antananarivo à Tsiroanomandidy, à une latitude de 18,93° Sud et une longitude de 47,42° Est. 
          <br></br><br></br>
          C'est un Etablissement Public National à caractère Administratif de Madagascar.
          <br></br><br></br>
          Il dessert une partie de la population de la région d'Analamanga ainsi qu'une grande majorité des régions limitrophes à l'ouest d'Antananarivo, notamment dans le domaine de la pneumo-phtisiologie et certains patients proviennent même d'autres provinces.
          <br></br><br></br>
          En tant que Centre Universitaire, il assure la formation pratique des étudiants en médecine et des paramédicaux, ainsi que les administratifs se spécialisant dans le secteur de la santé ; 
          <br></br><br></br>
          Et en tant que Centre Hospitalier, l'ex-Sanatorium est devenu un centre de référence de troisième niveau, spécialisé dans le domaine de la pneumo-phtisiologie (pôle pulmonaire). Il abrite également le Centre de Référence pour la Prise en Charge de la TuBerculose Multi-Résistante (CRPC TBMR). 
          <br></br><br></br>
          En plus de cette spécialité, les consultations externes et les hospitalisations dans les domaines de la cardiologie et la médecine générale sont prises en charge également (sans chirurgie).
          <br></br><br></br>
          Le Centre propose diverses explorations médicales et activités paracliniques telles que le radiodiagnostic, les analyses biologiques, les explorations fonctionnelles respiratoires, la fibroscopie bronchique, l'échographie/doppler et l'électrocardiographie.
          <br></br><br></br>
Il dispose également d'une pharmacie, d'un Service d'Accueil-Triage-Orientation (ATO) ainsi que des Services d'urgence et de réanimation.
          </p>
        </div>
      </div>

      {/* Cards with background section */}
      <div className={styles.bgTitle}>
          <h2 className={styles.title}> CHU Fenoarivo </h2>
        </div>

      <div className={styles.cardSectionWithBackground}>
        <div className={styles.cardWithBackground}>
          
        {<img src={getImageUrl("hero/hopitaly.png")} alt="play icon" className={styles.icon}/>}
        <motion.p
          onViewportEnter={startAnimation} // Déclenche l'animation quand visible
        >
        {stats.anneesExistence} ans d’existence
        </motion.p>

        </div>
        <div className={styles.cardWithBackground}>
        {<img src={getImageUrl("hero/employe.png")} alt="play icon" className={styles.icon}/>}
        <motion.p>
           {stats.nbEmployes} employés 
        </motion.p>
        </div>
        <div className={styles.cardWithBackground}>
        {<img src={getImageUrl("hero/lit.png")} alt="play icon" className={styles.icon}/>}
        <motion.p>
        Une capacité d'accueil de  {stats.nbLits} lits
        </motion.p>

        </div>
      </div>

    
      <div className={styles.bgTitle}>
          <h2 className={styles.title}> Catégories de chambres d'hospitalisation </h2>
        </div>

        <div className={styles.cardSectionWithoutBackground}>
        {/* Haut de gamme */}
        <div className={styles.cardWithoutBackground}>
          <div className={styles.cardContent}>
            <h3
              className={styles.cardone}
              style={{ backgroundImage: `url(${bgImages.cardone})` }}
            >
            </h3>
            <p>
              <div className={styles.titleCategorie}>              
                Haut de gamme
              </div>
              1 chambre avec 2 lits, dont 1 pour le patient et 1 pour le garde malade, équipée d'une télévision, d'une salle d'eau avec eau chaude, d'un réfrigérateur et d'un dressing.
            </p>
          </div>
        </div>

        <div className={styles.cardWithoutBackground}>
          <div className={styles.cardContent}>
            <h3
              className={styles.cardone}
              style={{ backgroundImage: `url(${bgImages.cardtwo})` }}
            >
            </h3>
            <p>
              <div className={styles.titleCategorie}>              
              Salle payante
              </div>
              1 dressing avec placard, 2 lits, dont 1 pour le patient et 1 pour le garde malade, 1 cuisine commune et 1 bloc sanitaire commun.
            </p>
          </div>
        </div>


        <div className={styles.cardWithoutBackground}>
          <div className={styles.cardContent}>
            <h3
              className={styles.cardone}
              style={{ backgroundImage: `url(${bgImages.cardthree})` }}
            >
            </h3>
            <p>
              <div className={styles.titleCategorie}>              
              Salle commune
              </div>
              1 salle composée de 3 à 6 lits (réservée uniquement aux patients), avec un bloc sanitaire commun et un local pour cuisine commune.
            </p>
          </div>
        </div>

      </div>

    </>
  );
};



const AnimatedNumber = ({ to }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < to ? prev + 1 : to));
    }, 20); // Ajuste la vitesse d’animation

    return () => clearInterval(interval);
  }, [to]);

  return <motion.span>{count}</motion.span>;
};

export default AnimatedNumber;
