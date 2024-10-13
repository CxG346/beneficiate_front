import React from "react";
import "./style.css";
import FaqsQuestion, { FaqsQuestionProps } from "../FaqsQuestion";

export interface FaqsGroupProps {
  questions: FaqsQuestionProps[];
  image: string;
  title: string;
}

const FaqsGroup: React.FC<FaqsGroupProps> = ({ questions, image, title }) => {
  return (
    <div className="faq-questions-container">
      <div className="title-faq">
        <img src={image} alt="" />
        <h5>{title}</h5>
      </div>
      <div className="faqs">
        {questions.map((question, index) => (
          <FaqsQuestion key={index} {...question} />
        ))}
      </div>
    </div>
  );
};

export default FaqsGroup;
