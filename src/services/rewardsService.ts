import { Reward } from "../types/api/rewards";
import api from "./api";

export const getRewards = () => {
    return api({
        method: "GET",
        url: "api/app/ecomerce-integration/rewards",
    });
};

export const getRewardsLeves = () => {
    return api<string, Reward[]>({
        method: "GET",
        url: "api/app/ecomerce-integration/levels",
    });
}

