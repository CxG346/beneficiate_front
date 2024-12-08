import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH } from '../routes/paths';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const token = localStorage.getItem('general_data_user');
  const location = useLocation();

  const publicPaths = [PATH.FORM_LOGIN, PATH.FORM_REGISTER, PATH.START, PATH.LOGIN];
  const protectedPaths = [PATH.HOME, PATH.EARN_POINTS, PATH.REDEEM_COUPON, PATH.SUCCESS_REDEEM, PATH.CODE_VALIDATION, PATH.LEVELS];

  if (token && publicPaths.includes(location.pathname)) {
    return <Navigate to={PATH.HOME} />;
  }

  if (!token && protectedPaths.includes(location.pathname)) {
    return <Navigate to={PATH.FORM_LOGIN} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default AuthGuard;