import React, { useState, useEffect } from "react";
import "./style.css";
import PointLevel from "../../components/PointLevel";
import { Level } from "../../types/api/rewards";
import { getRewardsLeves } from "../../services/rewardsService";

export interface LevelLayoutProps {
  children: React.ReactNode;
}

const LevelLayout: React.FC<LevelLayoutProps> = ({ children }) => {
  const [level, setLevel] = useState<string>("Bronce");
  const [levels, setLevels] = useState<Level[]>([]);
  const [xTransform, setXTransform] = useState<string>("translate(50%,0)");

  const handleLevel = () => {
    switch (level) {
      case "Bronce":
        setXTransform("translate(50%,0)");
        break;
      case "Plata":
        setXTransform("translate(15%,0)");
        break;
      case "Oro":
        setXTransform("translate(-15%,0)");
        break;
      case "Platino":
        setXTransform("translate(-50%,0)");
        break;
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const data: Level[] = await getRewardsLeves();
      setLevels(data);
    };

    fetchData();
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
          {levels.map((lvl, index) => (
            <PointLevel
              key={index}
              levelName={lvl.name}
              minPoints={0}
              maxPoints={300}
              isLast={index === levels.length - 1}
              isActive={level === lvl.name}
              onClick={() => setLevel(lvl.name)}
              pointsRange={lvl.pointsRange}
            />
          ))}
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
