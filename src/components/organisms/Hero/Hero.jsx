import React, { useLayoutEffect, useRef, useState, useEffect} from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import { Link } from "react-router-dom";
import { animateHero } from "../../../animations";

const images = {

  
  cardone: [
    getImageUrl("hero/cardone/img1.JPG"),
    getImageUrl("hero/cardone/img2.JPG"),
    getImageUrl("hero/cardone/img3.JPG"),
    getImageUrl("hero/cardone/img4.JPG"),

  ],
  cardtwo: [
    getImageUrl("hero/cardtwo/img1.JPG"),
    getImageUrl("hero/cardtwo/img2.JPG"),
    getImageUrl("hero/cardtwo/img3.JPG"),
    getImageUrl("hero/cardtwo/img4.JPG"),
  ],
  cardthree: [
    getImageUrl("hero/cardthree/img1.JPG"),
    getImageUrl("hero/cardthree/img3.JPG"),
    getImageUrl("hero/cardthree/img2.JPG"),
    getImageUrl("hero/cardthree/img4.JPG"),

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

      <div className={styles.containerIntro}>
        <div className={styles.bgTitle}>
          <h2 className={styles.title}> Introduction </h2>
        </div>
        <div className={styles.aboutItems}>
          <p className={styles.intro}>
            Situé à 13 km d’Antananarivo sur la route nationale n°1 reliant Antananarivo –Tsiroanomandidy, le Centre Hospitalier Universitaire Fenoarivo est situé à 18.93° de latitude sud et à 47.42° de longitude est.  
            <br></br><br></br>
            Le CHU Fenoarivo est un Etablissement Publique National à Caractère Administratif, parmi les 22 CHU de Madagascar et les 12 d’Antananarivo  
            <br></br><br></br>
            Il dessert une fraction de la population de la Région d’Analamanga et une majeure partie des régions limitrophes à l’ouest d’Antananarivo, surtout dans le domaine de la Pneumo-phtisiologie. 
            <br></br><br></br>
            Outre les activités inhérentes à son existence, à laquelle l’hôpital a été toujours connu (ex-sanatorium), le Centre Hospitalier est devenu un centre de soins diversifiés et spécialisés, et également un centre de formation pour le personnel de santé (médical et paramédical), et même pour le personnel administratif exerçant dans le domaine de la santé.
            <br></br><br></br> 
            C’est un centre de consultation et d’hospitalisation de référence de troisième niveau et offrant des services dans divers domaines, tels que la pneumo-phtisiologie, la cardiologie et la médecine général. Il inclut le Centre de Référence de Prise en Charge de la TuBerculose Multi-Résistante (CRPC TBMR).
            <br></br><br></br> 
            Il propose des explorations médicales, telles que le radiodiagnostic, les analyses biologiques, les explorations fonctionnelles respiratoires, la fibroscopie bronchique, l’échographie / doppler et l’électrocardiographie.
            <br></br><br></br> 
            Il dispose également d'une Pharmacie, d’un Service d’Accueil-Triage-Orientation  (ATO) ainsi que des Services d’Urgence et de Réanimation.     
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
