import React from "react";
import HomeLayout from "../../layout/Home/HomeLayout";
import "./style.css";
import GlassContainer from "../../components/GlassContainer";
import ActionsToWin, { ActionsToWinProps } from "../../components/ActionsToWin";
import { sendFacebookRewards, sendGoogleRewards, sendInstagramRewards, sendNewsletterRewards } from "../../services/sendService";
import { useAlert } from "../../components/Alert/useAlert";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/useModal";

const EarnPoints: React.FC = () => {
  const { showAlert } = useAlert();
  const { setData } = useDataContext();
  const navigate = useNavigate();
  const actions: ActionsToWinProps[] = [
    {
      image: <i className="bi bi-award" style={{ fontSize: "x-large" }}></i>,
      points: 150,
      action: "Déjanos 5 estrellas en Google",
      onClick: async () => {
        try {
          await sendGoogleRewards();
          showAlert("Gracias por tu calificación", "success");
          setData();
        } catch (error) {
          handleError(error, showAlert);
        }
      },
    },
    {
      image: <i className="bi bi-instagram" style={{ fontSize: "x-large" }}></i>,
      points: 75,
      action: "Seguir en Instagram",
      onClick: async () => {
        try {
          await sendInstagramRewards();
          showAlert("Gracias por seguirnos", "success");
          setData();
        } catch (error) {
          handleError(error, showAlert);
        }
      },
    },
    {
      image: <i className="bi bi-facebook" style={{ fontSize: "x-large" }}></i>,
      points: 75,
      action: "Seguir en Facebook",
      onClick: async () => {
        try {
          await sendFacebookRewards();
          showAlert("Gracias por seguirnos", "success");
          setData();
        } catch (error) {
          handleError(error, showAlert);
        }
      },
    },
    {
      image: <i className="bi bi-newspaper" style={{ fontSize: "x-large" }}></i>,
      points: 75,
      action: "Suscribirse al Newsletter",
      onClick: async () => {
        try {
          await sendNewsletterRewards();
          showAlert("Gracias por suscribirte", "success");
          setData();
        } catch (error) {
          handleError(error, showAlert);
        }
      },
    },
  ];

  const handleError = (error: unknown, showAlert: (message: string, type: "success" | "error" | "warning") => void) => {
    if (error instanceof Error && typeof error === 'object' && error.message) {
      const responseError = error as unknown as { response: { data: { error: { message: string } } } };
      showAlert(responseError.response.data.error.message, 'error');
    } else {
      showAlert('Error desconocido', 'error');
    }
  };

  const handleRedirect = () => {
    navigate('/redeem-coupon');
  };

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
              onClick={element.onClick}
            />
          ))}
        </div>
        <i className="bi bi-chevron-right" ></i>
      </GlassContainer>
      <GlassContainer 
      onClick={handleRedirect} 
      styles={{padding: '1rem 0.5rem', marginBottom: '10rem'}}>
        <span></span>
        <p style={{ color: "white" }}>Canjear ahora</p>
        <i className="bi bi-chevron-right" style={{ fontSize: "large" }}></i>
      </GlassContainer>
    </HomeLayout>
  );
};

export default EarnPoints;
