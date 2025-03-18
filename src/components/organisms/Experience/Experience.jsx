import React, { useEffect } from "react";
import styles from "./Experience.module.css";
import experiences from "../../../data/experiences.json";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";
import {gsap, Power3} from "gsap";


import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {

  const title = "MY EXPERIENCE "
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const dateRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })
  const words = title.split(" ")

  const windowWidth = window.innerWidth;

  useEffect(()=>{


    if (windowWidth > 830){

      gsap.to(timelineRef.current,{
        opacity: 1,
        duration: 5,
        '--timeline-before-height': '100%', 
          scrollTrigger:{
          trigger: timelineRef.current,
          start: "80% 60%",
          end:"200%",
          scrub:true,
          toggleActions: "restart pause reverse pause",
          opacity:1,
        },
  
      })
    }else {

      gsap.to(timelineRef.current,{
        opacity: 1,
        duration: 5,
        '--timeline-before-height': '100%', 
          scrollTrigger:{
          trigger: timelineRef.current,
          start: "50% 40%",
          end:"150%",
          scrub:true,
          toggleActions: "restart pause reverse pause",
          opacity:1,
          duration: 3,
        },
  
      })
    }
  })

  
  return (
    <footer className={styles.container}>
        <h2 id="experiences" className={styles.title} ref={titleRef}> 
          {
            words.map((word,i)=>{
              const start = i / words.length
              return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
            })
          }
        </h2>
      <section className={styles.timelineSection}>
        <div className={styles.timelineItems} ref={timelineRef}>

      {
          experiences.map((experience, id) => {
          
            return(
              <div className={styles.timelineItem} key={id} >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineDate} ref={dateRef}>{experience.date}</div>
                <div className={styles.timelineContent} >
                  <h3>{experience.title}</h3>
                  <p> {experience.contents} </p>
                </div>
              </div>
            )
          })
        }
          
        </div>
      </section>
    </footer>
  );
};
