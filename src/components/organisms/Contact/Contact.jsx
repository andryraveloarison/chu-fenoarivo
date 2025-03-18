import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";


export const Contact = () => {

  const title = "CONTACT ME "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")

  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title} ref={titleRef}> 
          {
            words.map((word,i)=>{
              const start = i / words.length
              return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
            })
          }
        </h2>
        <p className={styles.contactText}>Feel free to contact me by email or through my social networks.</p>
      </div>
      <ul className={styles.links}>

        {
          contacts.map((contact, id) => {
            return(
              <li key={id} className={styles.link}>
                <img src={getImageUrl(contact.imageSrc)} alt="Email icon" className={styles.image}/>
                <a href={contact.source} target="_blank">{contact.name}</a>
              </li>
            )
          })
        }

      </ul>

      <div className={styles.footer}>
        <p>Designed and build by Andry </p>
        <p>©Copyright 2024 - Andry RAVELOARISON</p>
      </div>
    </footer>
  );
};
