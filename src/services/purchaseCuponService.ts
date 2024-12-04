import { PurchaseCupon } from "../types/api/purchase-cupon";
import api from "./api";

export const getPurchase = (data: PurchaseCupon) => {
    return api<PurchaseCupon, boolean>({
        method: "GET",
        url: "api/app/ecomerce-integration/purchase-cupon",
        data,
    });
};