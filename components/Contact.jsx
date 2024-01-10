import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/Contact.module.css";
import classNames from "classnames";

export const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Vérifier que les champs ne sont pas vides
    if (!userName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Please enter your name.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
    }

    if (!userEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userEmail: "Please enter your email.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userEmail: "" }));
    }

    if (!message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter your message.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userEmail: "Please enter a valid email address.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userEmail: "" }));
    }

    emailjs
      .sendForm(
        "service_xqviwev",
        "template_d7flgo6",
        form.current,
        "2g8Ho1VqCHrZIrNva"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <div className={classNames(styles.container, styles.center)}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <span className={styles.error}>{errors.userName}</span>
        <label>Email</label>
        <input type="email" name="user_email" />
        <span className={styles.error}>{errors.userEmail}</span>
        <label>Message</label>
        <textarea name="message" />
        <span className={styles.error}>{errors.message}</span>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
