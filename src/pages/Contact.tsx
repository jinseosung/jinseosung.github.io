import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import logoImg from "../assets/logo.jpg";
import Button from "../components/Button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const formElements = {
    nom: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Votre message a été bien envoyé 🎉✨");
        },
        (error) => {
          console.log(error.text);
        }
      );

    Object.values(formElements).forEach((el) => {
      if (el.current) {
        el.current.value = "";
      }
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <h2 className="contact__title">Contactez moi</h2>
          <span className="contact__project">Avez-vous un projet?</span>
          <Button
            className="contact__mail"
            to={`mailto:jinseosung15@gmail.com`}
            children={`jinseosung15@gmail.com`}
          />
          <div className="contact__img-container">
            <img src={logoImg} alt="logo" />
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__container">
            <input
              ref={formElements.nom}
              type="text"
              name="from_name"
              placeholder=""
              required
            />
            <label>Nom</label>
          </div>
          <div className="form__container">
            <input
              ref={formElements.email}
              type="email"
              name="from_email"
              placeholder=""
              required
            />
            <label>Email</label>
          </div>
          <div className="form__container">
            <input
              ref={formElements.phone}
              type="text"
              name="from_tel"
              placeholder=""
              maxLength={10}
              required
            />
            <label>Téléphone</label>
          </div>
          <div className="form__container">
            <textarea
              ref={formElements.message}
              className="form__textarea"
              name="message"
              rows={6}
              placeholder=""
              required
            ></textarea>
            <label>Message</label>
          </div>
          <Button className="form__btn" children={`Envoyer`} type={`submit`} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
