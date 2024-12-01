import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://beneficiate-dev-api.azurewebsites.net/";

function getAccessToken(): string | null {
  return localStorage.getItem("general_access_token");
}

function formatData<RequestDataType>(data: RequestDataType, headers: Record<string, string>): RequestDataType | string | undefined {
  if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
    const urlSearchParams = new URLSearchParams();
    Object.entries(data as Record<string, string | number | boolean>).forEach(([key, value]) => {
      urlSearchParams.append(key, value as string);
    });
    return urlSearchParams.toString();
  }
  return data;
}

export default async function api<RequestDataType, ResponseDataType>({
  method = "POST",
  data,
  url = "",
  headers = {},
  params = {},
}: AxiosRequestConfig<RequestDataType>): Promise<ResponseDataType> {
  const accessToken = getAccessToken();

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const formattedData = formatData(data, headers as Record<string, string>);

  const response: AxiosResponse<ResponseDataType> = await axios.request({
    method,
    data: formattedData,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    params,
  });
  return response.data;
}
