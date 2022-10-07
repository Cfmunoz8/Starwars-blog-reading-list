import React, {useContext} from "react";
import { Context } from "../store/context";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Characters from "../components/characters";
import Planets from "../components/planets";
import Vehicles from "../components/vehicles";

function Home() {
  
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Characters />
      <Planets />
      <Vehicles />
      <Footer />
    </div>
  );
}

export default Home;
