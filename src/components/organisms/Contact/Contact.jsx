import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "ton_service_id", // Remplace par ton Service ID EmailJS
        "ton_template_id", // Remplace par ton Template ID EmailJS
        templateParams,
        "ta_public_key" // Remplace par ta Public Key EmailJS
      );

      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
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
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
      </div>
      

 
      {/* Carte avec React Leaflet */}
      <div className={styles.mapContainer}>
        <MapContainer center={[-18.93, 47.42]} zoom={13} scrollWheelZoom={false} className={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-18.93, 47.42]}>
            <Popup>
              Nous sommes ici ! <br /> Venez nous rendre visite.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    </section>
  );
};
