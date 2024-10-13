import React from "react";
import headerHome from "../../assets/header_homer.png";
import "./style.css";
import avatarBronze from "../../assets/avatar_bronze.png";
import bronzeMedal from "../../assets/bronze_medal.png";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="background-color-container">
        <div className="image-container-header">
          <img src={headerHome} alt="" />
          <div className="content-home">
            <div className="info-header">
              <div className="col-md-4">
                <img src={avatarBronze} alt="" />
              </div>
              <div className="col-md-8">
                <p style={{ color: "white", fontSize: "18px" }}>
                  Hola, Sebastian
                </p>
                <p style={{ color: "white", fontSize: "10px" }}>
                  Bienvenido a Quiero+
                </p>
              </div>
            </div>
            <div className="points-container">
              <img src={bronzeMedal} alt="" />
              <div className="col">
                <p>Tus puntos</p>
                <p>150</p>
              </div>
              <span> {">"} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
