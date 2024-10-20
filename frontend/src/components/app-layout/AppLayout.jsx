import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
const AppLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <main className="h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
