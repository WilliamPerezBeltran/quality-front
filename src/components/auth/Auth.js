import React from "react";
import SignUp from "../signup/SignUp";
import SignIn from "../signin/SignIn";

import "./Auth.css";
const Auth = () => {
  return (
    <div class="container-auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
