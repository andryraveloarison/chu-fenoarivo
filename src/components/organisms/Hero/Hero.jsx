import React, { useLayoutEffect, useRef } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
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
    <section className={styles.container}>
      <div className={styles.content}>
        
        <p className={styles.description} ref={descriptionRef}>
          <span className={styles.job}>" Ny anio mandresy ny omaly "</span> 

        </p>
        
        <li className={styles.link}>
                {<img src={getImageUrl("hero/play.png")} alt="play icon" className={styles.image}/>}
                <a href="" target="_blank">Hijery</a>
        </li>
      </div> 
    </section>
  );
};
