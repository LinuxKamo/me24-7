import { Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import InvitedUser from "../pages/InvitedUser";
import { INVITED, SIGN_IN, SIGN_UP } from "../consts/routes.auth";

export const AuthRoutes = () => {
  return (
    <>
      <Route path={SIGN_IN} element={<SignIn />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={INVITED} element={<InvitedUser />} />
    </>
  );
};
