import React from "react";
import SignUp from "../signup/SignUp";
import SignIn from "../signin/SignIn";

import "./Index.css";
const Index = () => {
  return (
    <div className="container-index">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Index;
