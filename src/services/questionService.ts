import { Question } from "../types/api/questionst";
import api from "./api";

export const getQuestionsFrequently = () => {
    return api<Question, Question[]>({
        method: "GET",
        url: "api/app/ecomerce-integration/frequently-questions",
    });
};

export const getQuestionsRewards = () => {
    return api<Question, Question[]>({
        method: "GET",
        url: "api/app/ecomerce-integration/rewards-questions",
    });
};


