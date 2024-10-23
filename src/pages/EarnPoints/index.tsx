import React from "react";
import HomeLayout from "../../layout/Home/HomeLayout";
import "./style.css";
import GlassContainer from "../../components/GlassContainer";
import ActionsToWin, { ActionsToWinProps } from "../../components/ActionsToWin";

const EarnPoints: React.FC = () => {
  const actions: ActionsToWinProps[] = [
    {
      image: <i className="bi bi-award" style={{ fontSize: "xx-large" }}></i>,
      points: 150,
      action: "Déjanos 5 estrellas en Google",
    },
    {
      image: (
        <i className="bi bi-instagram" style={{ fontSize: "xx-large" }}></i>
      ),
      points: 75,
      action: "Seguir en Instagram",
    },
    {
      image: <i className="bi bi-facebook"></i>,
      points: 75,
      action: "Seguir en Facebook",
    },
    {
      image: <i className="bi bi-newspaper"></i>,
      points: 75,
      action: "Suscribirse al Newsletter",
    },
  ];

  return (
    <HomeLayout>
      <GlassContainer>
        <div
          className="col text-center"
          style={{ width: "100%", padding: "1.5rem 0" }}
        >
          <p style={{ margin: "0", color: "white", fontSize: "10px" }}>
            Cada $1 equivale a 1 punto
          </p>
          <p
            style={{
              margin: "0",
              color: "white",
              fontWeight: "bolder",
              fontSize: "12px",
            }}
          >
            Cada 1 punto obtienes $1
          </p>
        </div>
      </GlassContainer>
      <GlassContainer>
        <span></span>
        <div className="col" style={{ width: "80%" }}>
          {actions.map((element, index) => (
            <ActionsToWin
              key={index}
              image={element.image}
              points={element.points}
              action={element.action}
            />
          ))}
        </div>
        <i className="bi bi-chevron-right"></i>
      </GlassContainer>
      <GlassContainer styles={{padding: '1rem 0.5rem'}}>
        <span></span>
        <p style={{ color: "white" }}>Canjear ahora</p>
        <i className="bi bi-chevron-right" style={{ fontSize: "large" }}></i>
      </GlassContainer>
    </HomeLayout>
  );
};

export default EarnPoints;
