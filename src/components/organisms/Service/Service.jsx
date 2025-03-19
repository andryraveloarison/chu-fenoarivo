import React, { useEffect, useRef } from "react";
import styles from "./Service.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImageUrl } from "../../../utils";
import servicesData from "../../../data/services.json";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const title = "Nos services "

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
    <section className={styles.container} id="services">
      <div className={styles.bgTitle}>
        <h2 className={styles.title} ref={titleRef}>
          {
              words.map((word,i)=>{
                const start = i / words.length
                return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
              })
            }        
            </h2>
      </div>

      <div className={styles.serviceGrid} ref={containerRef}>
        <ServiceCategory title="Services d’hospitalisation" services={servicesData.hospitalisation} />
        <ServiceCategory title="Services paracliniques" services={servicesData.paraclinique} />
        <ServiceCategory title="Services externes" services={servicesData.externes} />
      </div>
    </section>
  );
};

const ServiceCategory = ({ title, services }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{title}</h3>
    {services.map((service, index) => (
      <div key={index} className={styles.serviceItem}>
        <img src={getImageUrl(service.image)} alt={service.title} className={styles.image} />
        <h4 className={styles.serviceTitle}>{service.title}</h4>
        <p className={styles.servicePhone}>📞 {service.phone}</p>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
    ))}
  </div>
);
