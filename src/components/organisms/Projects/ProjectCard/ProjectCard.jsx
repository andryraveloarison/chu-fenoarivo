import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../../../utils";
import { useRef } from "react";
import {gsap, Power3} from "gsap";


import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const ProjectCard = ({
  project: { title, date, skills, imageSrc, index},
}) => {

  let imageRef = useRef(null)
  let projectTitleRef = useRef (null)
  let indexRef = useRef(null)
  let dateRef = useRef(null)
  let skillRef = useRef(null)

  const windowWidth = window.innerWidth;


  useEffect(() => {

    if (windowWidth >= 910){
    
    gsap.from(imageRef.current, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.3,
      marginTop:-30
    });    
    
    gsap.from(projectTitleRef.current, {
      ease: Power3.easeOut,
      duration: 0.3,
      marginLeft: 10
    });  

    gsap.from(dateRef.current, {
      ease: Power3.easeOut,
      duration: 0.3,
    
    });  
    
    gsap.from(indexRef.current, {
      opacity:1,
      ease: Power3.easeOut,
      duration: 0.3,
    
    }); 



  }else {

    gsap.to(imageRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 1,
      marginTop:-78,
      scale:0.8
    }); 

    gsap.to(indexRef.current, {
      opacity:0,
      ease: Power3.easeOut,
      duration: 0.3,
    }); 

    gsap.to(dateRef.current, {
      opacity:0,
      ease: Power3.easeOut,
      duration: 0.3,
    }); 


  }

    gsap.to(skillRef.current,{
      scrollTrigger:{
        trigger: skillRef.current,
        start: "-30px 60%",
        end:"500px",
        scrub:true,
        toggleActions: "restart pause reverse pause",
        opacity:1,
        duration: 5
      },
      opacity: 1,
      duration: 5
    })
  

  })

  const onMouseEnterHandler = ()=> {
    if (windowWidth >= 910){
      
    gsap.to(projectTitleRef.current, {
      ease: Power3.easeOut,
      duration: 1,
      marginLeft : -50
    });  

    gsap.to(imageRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 0.7,
      scale: 1.1,
      marginLeft: -40,
      marginTop: -30,
    }); 

    gsap.to(indexRef.current, {
      opacity:0,
      ease: Power3.easeOut,
      duration: 0.4,
    
    }); 

    gsap.to(dateRef.current, {
      ease: Power3.easeOut,
      duration: 1,
      marginRight: -20
    });  
  }
  }

  const onMouseLeaveHandler = ()=> {
    if (windowWidth >= 910){

    gsap.to(projectTitleRef.current, {
      ease: Power3.easeOut,
      duration: 1,
      marginLeft : 10
    });  

    gsap.to(imageRef.current, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 1,
      scale: 1,
      rotate: 0
    }); 

    gsap.to(indexRef.current, {
      opacity:1,
      ease: Power3.easeOut,
      duration: 0.4,
    
    }); 

    gsap.to(dateRef.current, {
      ease: Power3.easeOut,
      duration: 1,
      marginRight: 0
    });  
  }
  }

  return (
    <div className={styles.container} 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}> {/* Corrected here */}

      <div className={styles.date} ref={indexRef}>
        <h4 style={{fontSize: 26}}>{index}</h4>
      </div>
      <div className={styles.projectTitle} ref={projectTitleRef}>
        <div>
            <h3 className={styles.title}>{title}</h3>
          <ul className={styles.skills} ref={skillRef}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>


          </div>

      </div>
      <div ref={imageRef} style={{opacity:0}}>
  
        <img
          src={getImageUrl(imageSrc)}
          alt="Hero image of me"
          className={styles.imageProfil}
        />
      </div>

      <div className={styles.date} ref={dateRef}>
        <h4 >{date}</h4>
      </div>

    </div>
  );
};
