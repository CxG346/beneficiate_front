import {
  GlobalLoginTokenServiceRequest,
  UserLoginServiceRequest,
  UserLoginServiceResponse,
} from "../types/api/auth";
import api from "./api";

export const UserLoginService = (data: UserLoginServiceRequest) => {
  return api<UserLoginServiceRequest, UserLoginServiceResponse>({
    method: "POST",
    url: "api/app/ecomerce-integration/login-user",
    data,
  });
};

export const GlobalLoginTokenService = (
  data: GlobalLoginTokenServiceRequest
) => {
  return api<GlobalLoginTokenServiceRequest, any>({
    method: "POST",
    url: "connect/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  });
};
