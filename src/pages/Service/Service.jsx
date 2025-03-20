import styles from "./Service.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import { Service } from "../../components/organisms/Service/Service.jsx";
import Footer from "../../components/organisms/Footer/Footer.jsx";

function ServicePage() {

  return (
    <div className={styles.App}>
          <Navbar />
          <Service />
          <Footer/>
    </div>
  );
}

export default ServicePage;
