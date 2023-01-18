import React, {useContext} from "react";
import { Context } from "../store/context";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Info from "../components/info";

function Home() {
  
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
