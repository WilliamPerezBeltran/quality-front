import React from "react";
import { Content, Footer, Header } from "./index";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
