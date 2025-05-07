import React, { createContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

export const lawyerdataContext = createContext(null);

const LandingPage = () => {
  const [lawyers, setlawyers] = useState([]);



  useEffect(() => {
    const fetchlaywer = async () => {
      const res = await fetch("/lawyerdata.json");
      const data = await res.json();

      setlawyers(data);
    };

    fetchlaywer();
  }, []);



  return (
    <div className="scroll-smooth ">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <lawyerdataContext.Provider value={lawyers}>
          <Outlet></Outlet>
        </lawyerdataContext.Provider>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LandingPage;
