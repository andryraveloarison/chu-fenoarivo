import React, { useEffect, useRef } from 'react';
import styles from './ProjectDetails.module.css';

// Register ScrollTrigger plugin

export const ProjectDetails = () => {
  const galleryRef = useRef(null);
  const rightRef = useRef(null)

  useEffect(() => {
   
  }, []);


  return (
    <div className={styles.gallery} ref={galleryRef} >
    <div className={styles.left}>
          <div className={styles.detailsWrapper}>
            <div className={styles.details}>
              <div className={styles.headline}></div>
              <div className={styles.text} >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam illo blanditiis odio corporis excepturi nobis, totam assumenda tempore hic suscipit. Expedita aperiam modi quo itaque ipsa doloribus quidem magnam vero.
              </div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.details}>
            <div className={styles.headline}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.details}>
            <div className={styles.headline}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>

          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.photos}></div>
        </div>
      </div>
  );
};

export default ProjectDetails;

