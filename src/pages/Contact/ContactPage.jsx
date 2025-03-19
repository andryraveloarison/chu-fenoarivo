import styles from "./Contact.module.css";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import { Contact } from "../../components/organisms/Contact/Contact.jsx";

function ContactPage() {

  return (
    <div className={styles.App}>
          <Navbar />
          <Contact />

    </div>
  );
}

export default ContactPage;
