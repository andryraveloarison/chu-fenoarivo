import styles from "./Contact.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import { Contact } from "../../components/organisms/Contact/Contact.jsx";
import Footer from "../../components/organisms/Footer/Footer.jsx";

function ContactPage() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.mainContent}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
