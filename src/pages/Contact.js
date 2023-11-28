import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logoImg from "../assets/logo.jpg";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Votre message a été bien envoyé 🎉✨");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <h2 className="contact__title">Contactez moi</h2>
          <span className="contact__project">Avez-vous un projet?</span>
          <Link className="contact__mail" to={`mailto:jinseosung15@gmail.com`}>
            <span>jinseosung15@gmail.com</span>
          </Link>
          <img src={logoImg} alt="logo" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__container">
            <input type="text" name="from_name" placeholder="" required />
            <label>Nom</label>
          </div>
          <div className="form__container">
            <input type="email" name="from_email" placeholder="" required />
            <label>Email</label>
          </div>
          <div className="form__container">
            <input
              type="text"
              name="from_tel"
              placeholder=""
              maxLength="10"
              required
            />
            <label>Téléphone</label>
          </div>
          <div className="form__container">
            <textarea
              className="form__textarea"
              type="text"
              name="message"
              rows="6"
              placeholder=""
              required
            ></textarea>
            <label>Message</label>
          </div>
          <div className="form__btn">
            <button className="btn" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
