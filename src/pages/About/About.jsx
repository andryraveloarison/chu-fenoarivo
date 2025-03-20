import styles from "./About.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import {About} from "../../components/organisms/About/About.jsx"
import Footer from "../../components/organisms/Footer/Footer.jsx"

function Home() {

  return (
    <div className={styles.App}>
          <Navbar />
          <About />
          <Footer/>

    </div>
  );
}

export default Home;
