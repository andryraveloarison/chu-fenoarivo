
import { motion, useTransform } from "framer-motion";
import styles from './Word.module.css'

const Word = ({children, range, progress})=>{
    const opacity = useTransform(progress, range, [0,1])
    return (
        <span className={styles.word} >
          <span className={styles.shadow}> {children}</span>
          <motion.span style={{opacity}}>
            {children}
          </motion.span>
        </span>
  
    )
  }


export default Word