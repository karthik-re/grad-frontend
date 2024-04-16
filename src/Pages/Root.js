import React from "react";
import Header from "../Components/RootPage/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/RootPage/Footer";
import { AuthProvider } from "../Context/AuthContext";

const Root = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default Root;
