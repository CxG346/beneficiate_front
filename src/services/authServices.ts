import {
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

