import styles from "./Service.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import { Service } from "../../components/organisms/Service/Service.jsx";

function ServicePage() {

  return (
    <div className={styles.App}>
          <Navbar />
          <Service />

    </div>
  );
}

export default ServicePage;
