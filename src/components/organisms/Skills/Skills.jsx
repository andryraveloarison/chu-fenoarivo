import React from "react";
import styles from "./Skills.module.css";
import skills from "../../../data/skills.json";
import { getImageUrl } from "../../../utils";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const Skills = () => {

  const constraintsRef = useRef(null);

  const title = "MY SKILLS "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title} ref={titleRef}> 
        {
          words.map((word,i)=>{
            const start = i / words.length
            return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
          })
        }
      </h2>      

      <div className={styles.content}>
        <motion.div className={styles.containerMotion} ref={constraintsRef}> 
          <div className={styles.skills}>

            <motion.div 
              initial={{ x: "-100%" , opacity: 0}} // Ajustez ici pour représenter -100% de la largeur du viewport
              whileInView={{
                x: "-10%", opacity: 1
              }}
              viewport={{
                margin: "-20%"
              }}
              className={styles.itemMotion} 
              drag 
              dragConstraints={constraintsRef}
            >

                <div  className={styles.skill}>
                  <h1 className={styles.skillTitle}>Front-end</h1>
                    {skills.map((skill, id) => {
                      if(skill.category == "front-end"){
                        return(
                          <div key={id} className={styles.skillInfo}>
                            <div className={styles.skillImageContainer}>
                              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                          </div>
                        );
                      } 
                    })}
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: "100%", opacity: 0 }} // Ajustez ici pour représenter -100% de la largeur du viewport
                whileInView={{
                  x: "10%", opacity:1
                }}
                viewport={{
                  margin: "-20%"
                }}
                className={styles.itemMotionBack} 
                drag dragConstraints={constraintsRef}
              > 
                <div  className={styles.skill}>
                  <h1 className={styles.skillTitle}>Back-end</h1>
                  {skills.map((skill, id) => {
                      if(skill.category == "back-end"){
                        return(
                          <div className={styles.skillInfo}>
                            <div className={styles.skillImageContainer}>
                              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                          </div>
                        );
                      } 
                    })}
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: "-100%" , opacity: 0}} // Ajustez ici pour représenter -100% de la largeur du viewport
                whileInView={{
                  x: "-10%", opacity: 1
                }}
                viewport={{
                  margin: "-20%"
                }}
                
                className={styles.itemMotion} 
                drag dragConstraints={constraintsRef}
              > 
                <div  className={styles.skill}>
                  <h1 className={styles.skillTitle}>Other</h1>
                  {skills.map((skill, id) => {
                      if(skill.category == "other"){
                        return(
                          <div className={styles.skillInfo}>
                            <div className={styles.skillImageContainer}>
                              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                          </div>
                        );
                      } 
                    })}
                </div>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
