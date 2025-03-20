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




  })
  return (
    <section className={styles.container} id="services">
      <div className={styles.bgTitle}>
        <h2 className={styles.title}>
         {title}
            </h2>
      </div>

      <div className={styles.serviceGrid} ref={containerRef}>
        <ServiceCategory title="Services de cliniques" services={servicesData.cliniques} />
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
      </div>
    ))}
  </div>
);
