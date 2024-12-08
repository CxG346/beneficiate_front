import { UserLoginResponse } from "../types/api/auth";
import { Level } from "../types/api/rewards";
import api from "./api";

export const getRewards = (token: string) => {
    return api<string, UserLoginResponse>({
        method: "GET",
        url: `api/app/ecomerce-integration/rewards-for-user?token=${token}`,
    });
};

export const getRewardsLeves = () => {
    return api<string, Level[]>({
        method: "GET",
        url: "api/app/ecomerce-integration/levels",
    });
}

