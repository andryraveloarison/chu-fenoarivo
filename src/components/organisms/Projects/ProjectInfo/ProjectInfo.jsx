import React, { useEffect } from "react";
import styles from "./ProjectInfo.module.css";
import projects from "../../../../data/projects.json";
import { ProjectCard } from "../ProjectCard/ProjectCard.jsx";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Word from "../../../atoms/Word/Word.jsx";

export const Projects = () => {
  const title = "ALL MY PROJECTS "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")
  
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title} ref={titleRef}>
        {
          words.map((word,i)=>{
            const start = i / words.length
            return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
          })
        }
        </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};



