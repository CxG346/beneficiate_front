import React, { useState } from "react";
import "./style.css";

export interface FaqsQuestionProps {
  title: string;
  content: string;
}

const FaqsQuestion: React.FC<FaqsQuestionProps> = ({ title, content }) => {
  const [classContent, setClassContent] = useState<string>("display-none");

  const handleCardClick = () => {
    setClassContent(classContent === "" ? "display-none" : "");
  };

  return (
    <div className="faq-container" onClick={handleCardClick}>
      <h5>{title}</h5>
      <p className={classContent}>{content}</p>
    </div>
  );
};

export default FaqsQuestion;
