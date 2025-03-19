import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = () => {
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
      <h2 className={styles.title}>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
};
