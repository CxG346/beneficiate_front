import { PointsForUser } from "../types/api/points-for-user";
import api from "./api";

export const getPoinsForUser = (data: PointsForUser) => {
    return api<PointsForUser, PointsForUser>({
        method: "GET",
        url: "api/app/ecomerce-integration/points-for-user",
        data,
    });
};