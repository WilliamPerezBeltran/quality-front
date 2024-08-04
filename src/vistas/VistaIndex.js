import React, { Component, lazy, Suspense } from "react";
import Table from "../components/table/Table";
import Signup from "../components/signup/SignUp";
function VistaIndex() {
  return (
     <div >
      <Table />
      <Signup />
    </div>
  );
}

export default VistaIndex;
