import React from "react";
import headerHome from "../../assets/header_homer.png";
import "./style.css";
import avatarBronze from "../../assets/avatar_bronze.png";
import bronzeMedal from "../../assets/bronze_medal.png";
import { HomeLayoutProps } from "../../types/homeLayout";
import { useDataContext } from "../../contexts/useModal";
import { useNavigate } from "react-router-dom";

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { dataUser } = useDataContext();

  return (
    <>
      <div className="background-color-container">
        <div className="image-container-header">
          <img src={headerHome} alt="" style={{ width: "-moz-available" }} />
          <div className="content-home">
            <div className="info-header">
              <div className="col-md-4">
                <img src={avatarBronze} alt="" style={{ margin: '10px 0 0'}} />
              </div>
              <div className="col-md-8">
                <p style={{ color: "white", fontSize: "21px" }}>
                  Hola, {dataUser?.userName}
                </p>
                <p style={{ color: "white", fontSize: "10px" }}>
                  Bienvenido a Quiero+
                </p>
              </div>
            </div>
            <div className="points-container" style={{ cursor: "pointer", backdropFilter: 'blur(3px)' }}>
              <div style={{ display: 'flex', gap: '1rem'}} onClick={() => navigate('/levels')}>
                <img src={bronzeMedal} alt="" style={{margin: '9px 0 0 8px', width: '59px'}} />
                <div className="col col-points">
                  <p style={{ color: "white", fontSize: "12px", margin: "0" }}>
                    Tus puntos
                  </p>
                  <p
                    className="text-abel"
                    style={{
                      color: "white",
                      fontSize: "40px",
                      fontWeight: "normal",
                      margin: "-5px",
                      padding: "0",
                    }}
                  >
                    {dataUser?.amountOfPoints}
                  </p>
                </div>
              </div>
              <div className="container-level">
                <p style={{ color: "white", fontSize: "12px", margin: "0" }}>
                  (Nivel 1 .{dataUser.level})
                </p>
              </div>
              <span onClick={() => navigate('/levels')}>
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
