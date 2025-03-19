import styles from "./About.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import {About} from "../../components/organisms/About/About.jsx"

function Home() {

  return (
    <div className={styles.App}>
          <Navbar />
          <About />

    </div>
  );
}

export default Home;
