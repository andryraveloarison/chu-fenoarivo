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

  const title = "ABOUT ME "
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
      
      <h2 className={styles.title} ref={titleRef}> 
        {
          words.map((word,i)=>{
            const start = i / words.length
            return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
          })
        }
      </h2>
      
        <div className={styles.content} ref={imageRef}>
      
            <img src={getImageUrl("about/Andry.jpg")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
                style={{ pointerEvents: 'none' }} 
                
              />

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

                    <h1 >Web Developer</h1>
                  </motion.div>
                  <motion.div 
                    initial={{ x: "-100%", opacity: 0 }} // Ajustez ici pour représenter -100% de la largeur du viewport
                    whileInView={{
                      x: 0, opacity:1
                    }}
                    transition={{ duration: 0.5 }}  
          
                  >
                    <p>
                        Having a first successful experience in the
                        web development, I am currently open to all
                        new opportunities in this area.
                    </p>
                  </motion.div>
              </div>
            

          </div>

        </div>
        </div>

      </div>
    </section>
  );
};
