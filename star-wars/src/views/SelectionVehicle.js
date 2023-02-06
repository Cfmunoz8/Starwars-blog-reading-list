import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import LearnMoreVehicle from "../components/LearnMoreVehicle";

function SelectionVehicle() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMoreVehicle />
      <Footer />
    </div>
  );
}

export default SelectionVehicle;
