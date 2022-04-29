import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/adress.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_o8ig7vc",
        "template_e18pyoz",
        formRef.current,
        "user_lASS5RlUxrbSvhfz5mbvH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Vamos tornar seu projeto realidade?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 (47) 984552011
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              curbaniihsc@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              Blumenau, Santa Catarina - Brazil
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Qual o seu projeto?</b> Não exite em mandar mensagem, venha tirar
            suas duvidas
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="user_name" />
            <input type="text" placeholder="Assunto" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Mensagem" name="message" />
            <button>Enviar</button>
            {done && "Obrigado!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
