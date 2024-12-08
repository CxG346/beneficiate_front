import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ConfigurationModal, GlobalLoginTokenServiceRequest, UserLoginResponse } from '../types/api/auth';
import { getRewards } from '../services/rewardsService';
import axios from 'axios';
import { configModal } from '../services/authServices';
import { useDispatch } from 'react-redux';
import { setGeneralConfig } from '../slices/generalConfigSlice';

export interface DataContextProps {
  token: string | null;
  points: number;
  dataUser: UserLoginResponse;
  tokenUser: string | null;
  configModalData: ConfigurationModal;
  setToken: (token: string) => void;
  setPoints: (points: number) => void;
  setDataUser: (dataUser: UserLoginResponse) => void;
  setTokenUser: (tokenUser: string) => void;
  setConfigModalData: (configModalData: ConfigurationModal) => void;
  setData: () => void;
}

export const ModalContext = createContext<DataContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>('');
  const [dataUser, setDataUser] = useState<UserLoginResponse>({} as UserLoginResponse);
  const [points, setPoints] = useState<number>(0);
  const [tokenUser, setTokenUser] = useState<string | null>(localStorage.getItem('general_data_user'));
  const [configModalData, setConfigModalData] = useState<ConfigurationModal>({} as ConfigurationModal);

  useEffect(() => {
    const initialPoints = localStorage.getItem('points');
    if (initialPoints) {
      setPoints(Number(initialPoints));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('points', points.toString());
  }, [points]);
  
  useEffect(() => {
    if (tokenUser && tokenUser !== 'undefined') {
      console.log("tokenUser", tokenUser)
      setData();
    }
  }, [tokenUser]);

  useEffect(() => {
    getTokenLogin();
  }, []);

  useEffect(() => {
    console.log("dataUser", dataUser)
  }, [dataUser]);

  const getTokenLogin = async () => {
    const body: GlobalLoginTokenServiceRequest = {
      client_id: "Beneficiate_App",
      grant_type: "password",
      username: "QuieroNatural",
      password: "TGbHh7M0nZbclKQ?",
    };

    const response = await axios.post(
      "https://beneficiate-dev-api.azurewebsites.net/connect/token",
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    localStorage.setItem("general_access_token", response.data.access_token);
    setToken(response.data.access_token);
    setConfigModalFunc();
  };

  const setConfigModalFunc = async () => {
    const response = await configModal();
    setConfigModalData(response);
    dispatch(setGeneralConfig(response));
  }

  const setData = async () => {
    const token = JSON.parse(tokenUser || '{}') as UserLoginResponse;
    setDataUser(await getRewards(token.token));
  } 

  return (
    <ModalContext.Provider value={{ 
      token, points, dataUser, tokenUser, configModalData,
      setToken, setPoints, setDataUser, setTokenUser, setConfigModalData, setData
      }}>
      {children}
    </ModalContext.Provider>
  );
};