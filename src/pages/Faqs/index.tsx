import React from "react";
import "./style.css";
import FaqsGroup, { FaqsGroupProps } from "../../components/FaqsGroup";
import user from "../../assets/user.png";
import money from "../../assets/money.png";
import recommendation from "../../assets/recommendations.png";

const Faqs: React.FC = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur. Dignissim in fermentum quis a pharetra urna.Consectetur facilisis tempor vitae rhoncus senectus. Donec tortor ut adipiscing lectus amet sapien gravida pellentesque.";

  const faqs: FaqsGroupProps[] = [
    {
      title: "Mi perfil",
      image: user,
      questions: [
        {
          title: "¿Cómo edito mi perfil?",
          content: lorem,
        },
        {
          title: "¿Por que tengo que iniciar sesión?",
          content: lorem,
        },
      ],
    },
    {
      title: "Canje de puntos",
      image: money,
      questions: [
        {
          title: "¿Cómo canjear?",
          content: lorem,
        },
        {
          title: "¿Mis puntos expiran?",
          content: lorem,
        },
        {
          title: "¿Cuántas veces puedo canjear mis puntos?",
          content: lorem,
        },
      ],
    },
    {
      title: "Referidos y recompensas",
      image: recommendation,
      questions: [
        {
          title: "¿Cómo refiero a un amigo?",
          content: lorem,
        },
        {
          title: "El link de referido no sirve",
          content: lorem,
        },
        {
          title: "¿Las recompensas son instantaneas?",
          content: lorem,
        },
      ],
    },
  ];
  return (
    <div className="main-faq-container">
      {faqs.map((faq, index) => (
        <FaqsGroup key={index} {...faq} />
      ))}
      <div className="row footer-faq">
        <a href="">Tengo más dudas</a>
      </div>
    </div>
  );
};

export default Faqs;
