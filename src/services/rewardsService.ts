import { UserLoginResponse } from "../types/api/auth";
import { Level } from "../types/api/rewards";
import api from "./api";

const data = localStorage.getItem("general_data_user");
let dataUser: UserLoginResponse = {} as UserLoginResponse;

if (data && data !== "undefined") {
    dataUser = JSON.parse(data);
}


export const getRewards = () => {
    return api<string, UserLoginResponse>({
        method: "GET",
        url: `api/app/ecomerce-integration/rewards-for-user?token=${dataUser.token}`,
    });
};

export const getRewardsLeves = () => {
    return api<string, Level[]>({
        method: "GET",
        url: "api/app/ecomerce-integration/levels",
    });
}

