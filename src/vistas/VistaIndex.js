import React, { Component, lazy, Suspense } from "react";
import Table from "../components/table/Table";
import Signup from "../components/signup/SignUp";
import SignIn from "../components/signin/SignIn";
function VistaIndex() {
  return (
     <div >
      <Table />
      <Signup />
      <SignIn />
    </div>
  );
}

export default VistaIndex;
