import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Start from "../pages/Start";
import FormLogin from "../pages/FormLogin";
import FormRegister from "../pages/FormRegister";
import CommonQuestions from "../pages/CommonQuestions";
import Faqs from "../pages/Faqs";
import Support from "../pages/Support";
import QuestionsAbout from "../pages/QuestionsAbout";
import Home from "../pages/Home";
import EarnPoints from "../pages/EarnPoints";
import RedeemCoupon from "../pages/RedeemCoupon";
import { PATH } from "./paths";
import SuccessRedeem from "../pages/SuccessRedeem";
import CodeValidation from "../pages/CodeValidation";

const router = createBrowserRouter([
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.START,
    element: <Start />,
  },
  {
    path: PATH.FORM_LOGIN,
    element: <FormLogin />,
  },
  {
    path: PATH.FORM_REGISTER,
    element: <FormRegister />,
  },
  {
    path: PATH.COMMON_QUESTIONS,
    element: <CommonQuestions />,
  },
  {
    path: PATH.FAQS,
    element: <Faqs />,
  },
  {
    path: PATH.SUPPORT,
    element: <Support />,
  },
  {
    path: PATH.QUESTIONS_ABOUT_MODAL,
    element: <QuestionsAbout />,
  },
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.EARN_POINTS,
    element: <EarnPoints />,
  },
  {
    path: PATH.REDEEM_COUPON,
    element: <RedeemCoupon />,
  },
  {
    path: PATH.SUCCESS_REDEEM,
    element: <SuccessRedeem />,
  },
  {
    path: PATH.CODE_VALIDATION,
    element: <CodeValidation />
  }
]);

export default router;
