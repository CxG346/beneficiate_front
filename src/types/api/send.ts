export interface Request {
    name:     string;
    email:    string;
    question: string;
}

export interface ReferCode {
    token:         string;
    referCodeType: number;
}

export interface EmailCode {
    token:          string;
    amountOfPoints: number;
}

export interface ValidateCuponCode {
    token: string;
    code:  string;
}