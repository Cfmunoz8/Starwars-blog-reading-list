import React from "react";
import Header from "/workspace/html-hello/star-wars/src/components/header";
import Navbar from "/workspace/html-hello/star-wars/src/components/navbar";
import Footer from "/workspace/html-hello/star-wars/src/components/Footer";
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
