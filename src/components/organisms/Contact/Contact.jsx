import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logoIcon from "../../../../assets/contact/location.png"; // Chemin réel du logo

// Définition de l'icône personnalisée
const customIcon = L.icon({
  iconUrl: logoIcon,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const templateParams = {
      name: formData.name,
      subject: formData.subject, // Objet saisi par l'utilisateur
      message: `De: ${formData.name} (${formData.email})\n\n${formData.message}`,
      reply_to: formData.email, // Permet au destinataire de répondre
    };

    try {
      await emailjs.send(
        "service_u93qk3s", // Remplace par ton Service ID EmailJS
        "template_ans69df", // Remplace par ton Template ID EmailJS
        templateParams,
        "1LUIRDf2mKca5H3eq" // Remplace par ta Public Key EmailJS
      );

      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles.title}>Contactez-nous</h2>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Objet"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>

      {/* Carte avec React Leaflet */}
      <div className={styles.mapContainer}>
        <MapContainer
          center={[-18.93, 47.42]}
          zoom={13}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marqueur avec logo personnalisé */}
          <Marker position={[-18.93656, 47.43470]} icon={customIcon}>
            <Popup>
              Nous sommes ici ! <br /> Venez nous rendre visite.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};
