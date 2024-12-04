import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { UserLoginResponse } from '../types/api/auth';
import { getRewards } from '../services/rewardsService';

export interface DataContextProps {
  token: string | null;
  points: number;
  dataUser: UserLoginResponse;
  tokenUser: string | null;
  setToken: (token: string) => void;
  setPoints: (points: number) => void;
  setDataUser: (dataUser: UserLoginResponse) => void;
  setTokenUser: (tokenUser: string) => void;
}

export const ModalContext = createContext<DataContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('general_access_token'));
  const [dataUser, setDataUser] = useState<UserLoginResponse>({} as UserLoginResponse);
  const [points, setPoints] = useState<number>(0);
  const [tokenUser, setTokenUser] = useState<string | null>(localStorage.getItem('general_data_user'));

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
      setData();
    }
  }, [tokenUser]);

  useEffect(() => {
    console.log("dataUser", dataUser)
  }, [dataUser]);

  const setData = async () => {
    setDataUser(await getRewards());
  } 

  return (
    <ModalContext.Provider value={{ 
      token, points, dataUser, tokenUser, 
      setToken, setPoints, setDataUser, setTokenUser
      }}>
      {children}
    </ModalContext.Provider>
  );
};