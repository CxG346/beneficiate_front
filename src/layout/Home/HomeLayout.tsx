import React from "react";
import headerHome from "../../assets/header_homer.png";
import "./style.css";
import avatarBronze from "../../assets/avatar_bronze.png";
import bronzeMedal from "../../assets/bronze_medal.png";
import { HomeLayoutProps } from "../../types/homeLayout";
import { UserLoginResponse } from "../../types/api/auth";

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {

  const data = localStorage.getItem("general_data_user");
  let dataUser: UserLoginResponse = {} as UserLoginResponse;

  if (data && data !== "undefined") {
    dataUser = JSON.parse(data);
  }

  return (
    <>
      <div className="background-color-container">
        <div className="image-container-header">
          <img src={headerHome} alt="" style={{ width: "-moz-available" }} />
          <div className="content-home">
            <div className="info-header">
              <div className="col-md-4">
                <img src={avatarBronze} alt="" />
              </div>
              <div className="col-md-8">
                <p style={{ color: "white", fontSize: "18px" }}>
                  Hola, {dataUser?.userName}
                </p>
                <p style={{ color: "white", fontSize: "10px" }}>
                  Bienvenido a Quiero+
                </p>
              </div>
            </div>
            <div className="points-container" style={{ cursor: "pointer" }}>
              <img src={bronzeMedal} alt="" />
              <div className="col col-points">
                <p style={{ color: "white", fontSize: "10px", margin: "0" }}>
                  Tus puntos
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "normal",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {dataUser?.amountOfPoints}
                </p>
              </div>
              <div className="container-level">
                <p style={{ color: "white", fontSize: "12px", margin: "0" }}>
                  (Nivel 1 .Plata)
                </p>
              </div>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
