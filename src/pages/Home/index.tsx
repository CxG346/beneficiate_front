import React from "react";
import HomeLayout from "../../layout/Home/HomeLayout";
import "./style.css";

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <div
        className="col-md-12 redeem-now-container general-container-glass"
        style={{ cursor: "pointer" }}
      >
        <span></span>
        <p style={{ color: "white" }}>Canjear ahora</p>
        <i className="bi bi-chevron-right" style={{ fontSize: "large" }}></i>
      </div>
      <div className="questions-row">
        <div
          className="col-md-5 general-container-glass questions-container"
          style={{ cursor: "pointer" }}
        >
          Cómo sumar puntos
        </div>
        <div
          className="col-md-5 general-container-glass questions-container"
          style={{ cursor: "pointer" }}
        >
          Cómo canjear puntos
        </div>
      </div>
      <div
        className="general-container-glass"
        style={{ width: "80%", margin: "1rem 0" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.25rem 0.75rem",
            alignItems: "center",
          }}
        >
          <div className="col header-earn-points" style={{ marginTop: "1rem" }}>
            <p style={{ margin: "0", fontSize: "13px" }}>
              Genera ingresos invitando a tus amigos
            </p>
            <p style={{ margin: "0", fontSize: "10px" }}>
              0 Referidos completados
            </p>
          </div>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="row">
          <p
            style={{
              color: "white",
              fontSize: "14px",
              padding: "0.25rem 0.5rem 2rem 0.5rem",
            }}
          >
            Por cada compra de tus referidos generas x Puntos que equivalen a X
            pesos. A su vez, tu referido recibe Y puntos
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="input-code">
            <input type="text" />
            <button>
              <i className="bi bi-copy" style={{ fontSize: "large" }}></i>
            </button>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "80%" }}>
            <p style={{ color: "white", fontSize: "12px", textAlign: "left" }}>
              Reenviarme el codigo a:
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{
            padding: "0.5rem .75rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "x-large" }}></i>
            <p style={{ color: "white" }}>Whatsapp</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <i className="bi bi-envelope" style={{ fontSize: "x-large" }}></i>
            <p style={{ color: "white" }}>Email</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
