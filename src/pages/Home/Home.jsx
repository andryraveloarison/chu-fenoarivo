import styles from "./Home.module.css";
import { Hero } from "../../components/organisms/Hero/Hero.jsx";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import Footer from "../../components/organisms/Footer/Footer.jsx";

function Home() {

  return (
    <div className={styles.App}>
          <Navbar />
          <Hero />
          <Footer />
    </div>
  );
}

export default Home;
