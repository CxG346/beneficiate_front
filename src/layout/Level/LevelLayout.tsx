import React, { useState, useEffect } from "react";
import "./style.css";
import PointLevel from "../../components/PointLevel";

export interface LevelLayoutProps {
  children: React.ReactNode;
}

const LevelLayout: React.FC<LevelLayoutProps> = ({ children }) => {
  const [level, setLevel] = useState<string>("silver");
  const [xTransform, setXTransform] = useState<string>("translate(50%,0)");

  const handleLevel = () => {
    switch (level) {
      case "bronze":
        setXTransform("translate(50%,0)");
        break;
      case "silver":
        setXTransform("translate(15%,0)");
        break;
      case "gold":
        setXTransform("translate(-15%,0)");
        break;
      case "diamond":
        setXTransform("translate(-50%,0)");
        break;
    }
  };

  useEffect(() => {
    handleLevel();
  }, []);

  useEffect(() => {
    handleLevel();
  }, [level]);

  return (
    <div className="background-color-container-level">
      <section className="wave-section-level">
        <div className={`linear-gradient-level-` + level}></div>
        <div
          className={`level-container level-container-${level}`}
          style={{ transform: xTransform }}
        >
          <PointLevel
            levelName={"Bronce"}
            minPoints={0}
            maxPoints={300}
            isLast={false}
            isActive={level === "bronze"}
            onClick={() => setLevel("bronze")}
          />
          <PointLevel
            levelName={"Plata"}
            minPoints={301}
            maxPoints={600}
            isLast={false}
            isActive={level === "silver"}
            onClick={() => setLevel("silver")}
          />
          <PointLevel
            levelName={"Oro"}
            minPoints={601}
            maxPoints={900}
            isLast={false}
            isActive={level === "gold"}
            onClick={() => setLevel("gold")}
          />
          <PointLevel
            levelName={"Diamante"}
            minPoints={900}
            maxPoints={1200}
            isLast={true}
            isActive={level === "diamond"}
            onClick={() => setLevel("diamond")}
          />
        </div>
        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L120,128C240,160,480,224,720,208C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section style={{ minHeight: "40%", background: "white" }}>
        {children}
      </section>
    </div>
  );
};

export default LevelLayout;
