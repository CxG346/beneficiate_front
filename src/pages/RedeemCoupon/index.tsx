import React, { useEffect, useState } from "react";
import HomeLayout from "../../layout/Home/HomeLayout";
import GlassContainer from "../../components/GlassContainer";
import "./style.css";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/useModal";
import Header from "../../components/Header";

const RedeemCoupon: React.FC = () => {
  const navigate = useNavigate();
  const { configModalData, dataUser } = useDataContext();
  const [valueInputNumber, setValueInputNumber] = useState<number>(0);
  const [points, setPoints] = useState<number>(dataUser.amountOfPoints || 0);

  const { secondaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

  const handleFaqs = () => { 
    navigate('/faqs');
  };

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(Number(value))) {
      return;
    }

    if (value.length > 6) {
      return;
    }

    if (Number(value) > points) {
      return;
    }

    setValueInputNumber(Number(value));
  };

  useEffect(() => {
    setPoints(dataUser.amountOfPoints);
  }, [dataUser]);

  return (
    <>
      <Header/>
      <HomeLayout>
        <GlassContainer>
          <div className="col" style={{ padding: "1rem 20%" }}>
            <p className="text-abel" style={{ color: "white", fontSize: "14px" }}>
              Introduzca la cantidad de puntos que desea canjear
            </p>
            <input
              type="text"
              className="input-number text-abel"
              style={{ padding: "1rem 0", fontSize: "70px", textAlign: "center" }}
              value={valueInputNumber}
              onChange={handleInputNumber}
            />
            <p style={{ margin: "0", color: "white", fontSize: "12px" }}>
              Puntos disponibles: {points - valueInputNumber}
            </p>
            <p style={{ margin: "0", color: "white", fontSize: "12px" }}>
              {valueInputNumber} puntos equivalente a $
              {valueInputNumber.toFixed(2)}
            </p>
            <button
              style={{
                width: "100%",
                background:
                  valueInputNumber > 0
                    ? `${secondaryColor}`
                    : "rgba(217, 217, 217, 0.7)",
                color: "white",
                padding: "1rem 0",
                margin: "1.5rem 0",
              }}
            >
              Canjear
            </button>
          </div>
        </GlassContainer>
        <div style={{ display: "flex", width: "90%", gap: "1.5rem" }}>
          <div className="col-md-6" style={{ width: "100%" }} onClick={handleFaqs}>
            <GlassContainer styles={{ width: "100%", padding: "0.5rem 0" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",
                  width: "100%",
                  margin: "0",
                  padding: ".5rem 0",
                }}
              >
                Como sumar puntos
              </p>
            </GlassContainer>
          </div>
          <div className="col-md-6" style={{ width: "100%" }} onClick={handleFaqs}>
            <GlassContainer styles={{ width: "100%", padding: "0.5rem 0" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",
                  width: "100%",
                  margin: "0",
                  padding: ".5rem 0",
                }}
              >
                Como canjear puntos
              </p>
            </GlassContainer>
          </div>
        </div>
        <div style={{ padding: '80px 15px 40px'}}>
          <img src={
            configModalData.imagenBanner
          } alt="banner" style={{ width: '100%'}}
          />
        </div>
      </HomeLayout>
    </>
  );
};

export default RedeemCoupon;
