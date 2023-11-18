import React from "react";
import Footer from "../Footer";
import PublicHeader from "../Headers/PublicHeader";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
