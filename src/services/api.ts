import axios, { AxiosRequestConfig } from "axios";
import { AxiosApiResponse } from "../types/api/api";

axios.defaults.baseURL = "https://beneficiate-dev-api.azurewebsites.net/";

export default function api<RequestDataType, ResponseDataType>({
  method = "POST",
  data,
  url = "",
  headers = {},
  params = {},
}: AxiosRequestConfig<RequestDataType>): Promise<
  AxiosApiResponse<ResponseDataType>
> {
  const accessToken = localStorage.getItem("general_access_token");

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  let formattedData: RequestDataType | string | undefined = data;
  if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
    const urlSearchParams = new URLSearchParams();
    Object.entries(data as Record<string, any>).forEach(([key, value]) => {
      urlSearchParams.append(key, value);
    });
    formattedData = urlSearchParams.toString();
  }

  console.log("API Request", {
    method,
    data: formattedData,
    url,
    headers,
  });

  return axios
    .request<AxiosApiResponse<ResponseDataType>>({
      method,
      data: formattedData,
      url,
      headers: {
        "content-type": "application/json",
        ...headers,
      },
      params,
    })
    .then((response) => response.data);
}
