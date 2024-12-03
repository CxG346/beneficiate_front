import { UserLoginResponse } from "../types/api/auth";
import { Question } from "../types/api/questionst";
import { EmailCode, ReferCode, Request, ValidateCuponCode } from "../types/api/send";
import api from "./api";

const data = localStorage.getItem("general_data_user");
let dataUser: UserLoginResponse = {} as UserLoginResponse;

if (data && data !== "undefined") {
    dataUser = JSON.parse(data);
}

export const sendRequest = (data: Request) => {
    return api<Request, boolean>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-question",
        data,
    });
};

export const sendRequestRewardQuestions = (data: Question[]) => {
    return api<Question[], boolean>({
        method: "POST",
        url: `api/app/ecomerce-integration/send-rewards-questions?token=${dataUser.token}`,
        data,
    });
};

export const sendInstagramRewards = () => {
    return api<Question[], Question[]>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-instagram-rewards",
    });
};

export const sendFacebookRewards = () => {
    return api<Question[], Question[]>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-facebook-rewards",
    });
};

export const sendGoogleRewards = () => {
    return api<Question[], Question[]>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-google-rewards",
    });
};  

export const sendNewsletterRewards = () => {
    return api<Question[], Question[]>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-newsletter-rewards",
    });
};

export const sendReferCode = (data: ReferCode) => {
    return api<ReferCode, string>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-refer-code",
        data,
    });
}

export const sendEmailCode = (data: EmailCode) => {
    return api<EmailCode, string>({
        method: "POST",
        url: "api/app/ecomerce-integration/send-email",
        data,
    });
}

export const validateCodeGetCupon = (data: ValidateCuponCode) => {
    return api<ValidateCuponCode, string>({
        method: "POST",
        url: "api/app/ecomerce-integration/validate-code-cupon",
        data,
    });
}