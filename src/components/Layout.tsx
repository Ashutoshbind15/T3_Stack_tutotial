import React from "react";
import Navbar from "./Navbar";

interface propType {
  children: React.ReactNode;
}

const Layout = (props: propType) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
