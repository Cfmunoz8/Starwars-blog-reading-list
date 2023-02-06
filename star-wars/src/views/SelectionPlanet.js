import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import LearnMorePlanet from "../components/LearnMorePlanet";

function SelectionPlanet() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMorePlanet />
      <Footer />
    </div>
  );
}

export default SelectionPlanet;
