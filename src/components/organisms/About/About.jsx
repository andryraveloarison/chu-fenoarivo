import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";
import {gsap} from "gsap";


import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const About = () => {

  const title = "À propos "
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")


  useEffect(() => {

    gsap.to(imageRef.current,{
      
      scrollTrigger:{
        trigger: imageRef.current,
        start: "0% 400%",
        scrub:true,
        toggleActions: "restart pause reverse pause",
        opacity: 1,
        duration: 0.5,
        scale:1,
      },
      opacity: 1,
      duration: 0.5,
      scale:1,

    })


  })


  return (
    <section className={styles.container} id="about">
      <div className={styles.bgTitle}>
        <h2 className={styles.title}> 
          {title}
        </h2>
      </div>

      <div className={styles.content} ref={imageRef}>


    
      <div>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <motion.div 
                initial={{ x: "-100%", opacity: 0 }} // Ajustez ici pour représenter -100% de la largeur du viewport
                whileInView={{
                  x: 0, opacity:1
                }}
                transition={{ duration: 0.2 }}   
                      
              >

                <h1 className={styles.title}>Mots du Directeur d'Etablissement du CHU Fenoarivo</h1><br></br>
              </motion.div>

                <p>
Chers visiteurs,<br></br><br></br>
C'est avec un immense plaisir que je vous souhaite la bienvenue sur le site web du Centre Hospitalier Universitaire (CHU) Fenoarivo, Madagascar. <br></br><br></br>
Aujourd'hui, nous faisons un pas important vers l'avenir en lançant notre plateforme en ligne, un espace dédié à l'information, à l'échange et à la transparence.<br></br>
Le CHU Fenoarivo, situé dans la partie ouest d’Antananarivo, le Capital de Madagascar est l’un des 22 CHU dans tout Madagascar. Il est spécialisé dans le domaine de la pneumologie et la phtisiologie. Il s'engage à offrir des soins de qualité, centrés sur les patients « izay marary andrianina ». <br></br><br></br>
Notre slogan, « ny anio mandresy ny omaly » traduit librement "Aujourd'hui meilleur qu'hier", reflète notre détermination à améliorer continuellement nos services et à humaniser chaque aspect de notre prise en charge. <br></br>
Nous croyons fermement que chaque patient mérite une attention particulière et un accueil chaleureux, et nous sommes dans la voie de tout mettre en œuvre pour que cela soit une réalité.<br></br>
Sur ce site, vous trouverez des informations sur nos services, nos équipes, ainsi que des ressources utiles pour vous accompagner dans votre parcours de soins et lors d’éventuelle hospitalisation de vos proches. Nous espérons que cet outil facilitera vos démarches et vous permettra de mieux connaître notre Etablissement.<br></br><br></br>
Nous vous remercions de votre intérêt pour notre CHU. Nous sommes à votre disposition et accueillons vos propositions et remarques avec grand plaisir. Ensemble, nous pouvons bâtir un avenir meilleur pour la santé de notre communauté.<br></br>
<br></br>
Cordialement,

                </p>
                <br></br>
                <div className={styles.nameDe}>
                <p >
                Dr Albert Sylla RATSIMAMANGA <br></br>
                Directeur du CHU Fenoarivo, Madagascar                </p>
                </div>

          </div>
        </div>
      </div>
    </div>
    </div>

    <div className={styles.contentHistory} ref={imageRef}>
      
      <img src={getImageUrl("about/chu.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          style={{ pointerEvents: 'none' }} 
          
        />
      <div>
        <div className={styles.aboutItemsHistory}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <motion.div 
                initial={{ x: "200%", opacity: 0 }} // Ajustez ici pour représenter -100% de la largeur du viewport
                whileInView={{
                  x: 0, opacity:1
                }}
                transition={{ duration: 0.2 }}   
                      
              >

                <h1 className={styles.black}>Historique</h1>
                <br></br><br></br>

              </motion.div>

                <p className={styles.black}>
                - 1903 : création d’un complexe hospitalier composé d’un dispensaire, d’une Maternité, d’un
service d’hospitalisation, d’une pharmacie et d’une hospitalisation des malades mentaux
(transférée à Anjanamasina en 1913)
<br></br><br></br>

- 1939 Construction des ateliers et des garages
<br></br><br></br>

- 1953 à 1957 : constructions des 06 pavillons et des bureaux ;
Appellation : SANATORIUM DE FENOARIVO
<br></br><br></br>

- 1959 : HOPITAL SANATORIUM DE FENOARIVO
<br></br><br></br>

- 1971 à 1976 : Construction de nouveaux bâtiments et de SMI
Appellation en 1976 : HOPITAL DE FENOARIVO
<br></br><br></br>

- 1997 : L’Hôpital de Fenoarivo fait partie du CENTRE HOSPITALIER UNIVERSITAIRE
D’ANTANANARIVO, le SMI devient CSB2 sous la direction du SSD d’Antananarivo
<br></br><br></br>

- 2002 : CHU HOPITAL DE FENOARIVO
<br></br><br></br>

- 2008 : construction de la façade vitrée de l’hôpital et construction des salles haut de gamme
<br></br><br></br>

- 2012 : Une des composantes du CHU d’Antananarivo : l’HOPITAL UNIVERSITAIRE DE
FENOARIVO
<br></br><br></br>

- 2015 jusqu’à maintenant : CHU FENOARIVO
                </p>
          
                

          </div>
        </div>
      </div>
    </div>
</div>
    </section>
  );
};
