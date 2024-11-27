import React from "react";
import { LoginLayoutProps } from "../../types/loginLayout";
import "./style.css";

const LoginLayout: React.FC<LoginLayoutProps> = ({
  imgSrc,
  children,
  showFooter = false,
}) => {
  return (
    // <div className="login-container">
    <>
      <div className="background-color-container">
        <section className="wave-section">
          <div className="image-container">
            <img src={imgSrc} alt="" />
          </div>
          <svg
            className="wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L120,128C240,160,480,224,720,208C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className="flex flex-1 background-white">{children}</section>
      </div>
    </>
    // </div>
  );
};

export default LoginLayout;
