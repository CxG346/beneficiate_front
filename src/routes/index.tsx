import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./paths";
import Login from "../pages/Login";
import Start from "../pages/Start";
import FormLogin from "../pages/FormLogin";
import FormRegister from "../pages/FormRegister";
import CommonQuestions from "../pages/CommonQuestions";
import Faqs from "../pages/Faqs";
import Support from "../pages/Support";
import QuestionsAbout from "../pages/QuestionsAbout";
import Home from "../pages/Home";

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
]);

export default router;
