export interface UserLoginServiceRequest {
  userName: string;
  password: string;
}

interface UserDiscount {
  id?: string;
  name: string;
  amountOfPoints: number;
  benefitType: number;
}

interface UserLoginResponse {
  token: string;
  level: string;
  userName: string;
  amountOfPoints: number;
  referCodeForFriends: string;
  discounts: UserDiscount[];
}

export type UserLoginServiceResponse = UserLoginResponse;

export interface GlobalLoginTokenServiceRequest {
  client_id: string;
  grant_type: string;
  username: string;
  password: string;
}