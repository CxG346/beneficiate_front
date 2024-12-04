import {
  ConfigurationModal,
  UserLoginResponse,
  UserLoginServiceRequest,
  UserRegister,
} from "../types/api/auth";
import api from "./api";

export const login = (data: UserLoginServiceRequest) => {
  return api<UserLoginServiceRequest, UserLoginResponse>({
    method: "POST",
    url: "api/app/ecomerce-integration/login-user",
    data,
  });
};

export const register = (data: UserRegister) => {
  return api<UserRegister, boolean>({
    method: "POST",
    url: "api/app/ecomerce-integration/client",
    data,
  });
}

export const configModal = (data: { ci: string }) => {
  return api<{ ci: string }, ConfigurationModal>({
    method: "POST",
    url: "api/app/ecomerce-integration/configuration-modal",
    data,
  });
};

