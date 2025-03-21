import React, { useState, useEffect, useRef } from "react";
import styles from "./Service.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImageUrl } from "../../../utils";
import servicesData from "../../../data/services.json";
import { useScroll } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const title = "Nos services ";

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "start 0.25"],
  });

  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className={styles.container} id="services">
      <div className={styles.bgTitle}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.serviceGrid} ref={containerRef}>
        <ServiceCategory title="Services cliniques" services={servicesData.cliniques} onClick={openModal} />
        <ServiceCategory title="Services paracliniques" services={servicesData.paraclinique} onClick={openModal} />
        <ServiceCategory title="Services externes" services={servicesData.externes} onClick={openModal} />
      </div>

      {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
    </section>
  );
};

const ServiceCategory = ({ title, services, onClick }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{title}</h3>
    {services.map((service, index) => (
      <div key={index} className={styles.serviceItem} onClick={() => onClick(service)}>
        <img src={getImageUrl(service.image)} alt={service.title} className={styles.image} />
        <h4 className={styles.serviceTitle}>{service.title}</h4>
        <p className={styles.servicePhone}>📞 {service.phone}</p>
      </div>
    ))}
  </div>
);

const ServiceModal = ({ service, onClose }) => (
  <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <p className={styles.closeButton} onClick={onClose}>
        ✖
      </p>
      <h3 className={styles.modalTitle}>{service.title}</h3>
      <img src={getImageUrl(service.image)} alt={service.title} className={styles.modalImage} />
      <div 
        className={styles.modalDescription} 
        dangerouslySetInnerHTML={{ __html: service.description }} 
      />      
    </div>
  </div>
);
