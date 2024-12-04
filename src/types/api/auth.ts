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

export interface UserLoginResponse {
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

export interface GlobalLoginTokenServiceResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

export interface UserRegister {
  ci:             string;
  phoneNumber:    string;
  email:          string;
  firstName:      string;
  lastName:       string;
  referCode:      string;
  password:       string;
  emailMarketing: boolean;
}

export interface ConfigurationModal {
  imagenLogo:        string;
  primaryColor:      string;
  secondaryColor:    string;
  tertiaryColor:     string;
  title:             string;
  frequentQuestions: null;
  questionsAboutMe:  null;
  bottonText:        string;
  colorButton:       string;
  imagenBanner:      string;
}
