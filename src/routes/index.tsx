import { createBrowserRouter, RouteObject } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard'; // Ajusta la ruta según tu estructura de archivos
import Login from '../pages/Login';
import Start from '../pages/Start';
import FormLogin from '../pages/FormLogin';
import FormRegister from '../pages/FormRegister';
import CommonQuestions from '../pages/CommonQuestions';
import Faqs from '../pages/Faqs';
import Support from '../pages/Support';
import QuestionsAbout from '../pages/QuestionsAbout';
import Home from '../pages/Home';
import EarnPoints from '../pages/EarnPoints';
import RedeemCoupon from '../pages/RedeemCoupon';
import SuccessRedeem from '../pages/SuccessRedeem';
import CodeValidation from '../pages/CodeValidation';
import { PATH } from './paths'; // Ajusta la ruta según tu estructura de archivos
import Level from '../pages/Levels';

const withAuthGuard = (element: React.ReactNode) => (
  <AuthGuard>{element}</AuthGuard>
);

const routes: RouteObject[] = [
  { path: PATH.LOGIN, element: withAuthGuard(<Login />) },
  { path: PATH.START, element: withAuthGuard(<Start />) },
  { path: PATH.FORM_REGISTER, element: withAuthGuard(<FormRegister />) },
  { path: PATH.FORM_LOGIN, element: withAuthGuard(<FormLogin />) },
  { path: PATH.COMMON_QUESTIONS, element: withAuthGuard(<CommonQuestions />) },
  { path: PATH.FAQS, element: withAuthGuard(<Faqs />) },
  { path: PATH.SUPPORT, element: withAuthGuard(<Support />) },
  { path: PATH.QUESTIONS_ABOUT_MODAL, element: withAuthGuard(<QuestionsAbout />) },
  { path: PATH.HOME, element: withAuthGuard(<Home />) },
  { path: PATH.EARN_POINTS, element: withAuthGuard(<EarnPoints />) },
  { path: PATH.REDEEM_COUPON, element: withAuthGuard(<RedeemCoupon />) },
  { path: PATH.SUCCESS_REDEEM, element: withAuthGuard(<SuccessRedeem />) },
  { path: PATH.CODE_VALIDATION, element: withAuthGuard(<CodeValidation />) },
  { path: PATH.LEVELS, element: withAuthGuard(<Level />) },
];

const router = createBrowserRouter(routes);

export default router;